
import { Component, Host } from 'angular2/core';
import { NgFormModel } from 'angular2/common';

@Component({
    selector: 'control-messages',
    inputs: ['controlName: control'],
    template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {
    controlName: string;
    constructor( @Host() private _formDir: NgFormModel) { }

    get errorMessage() {
        // Find the control in the Host (Parent) form
        let c = this._formDir.form.find(this.controlName);
        for (let propertyName in c.errors) {
            // If control has a error
            if (c.errors.hasOwnProperty(propertyName) && c.touched) {
                // Return the appropriate error message from the Validation Service
                return ValidationService.getValidatorErrorMessage(propertyName);
            }
        }

        return null;
    }
}
export class ValidationService {


    static getValidatorErrorMessage(code: string) {
        let config = {
            'required': 'Pole wymagane',
            'invalidEmail': 'To nie jest poprawny adres e-mail',
            'invalidPesel': 'Niepoprawny numer PESEL',
            'NaN': 'To pole powinno być liczbą'
        };
        return config[code];
    }

    static emailValidator(control) {
        if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
            return null;
        } else {
            return { 'invalidEmail': true };
        }
    }
    static numberValidator(control) {
        if (control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { 'NaN': true };
        }
    }
    static peselValidator(control) {
        var pesel = control.value;

        if (isNaN(pesel)) {
            return { 'invalidPesel': true };
        }

        var rok = parseInt(pesel.substring(0, 2), 10);
        var miesiac = parseInt(pesel.substring(2, 4), 10) - 1;
        var dzien = parseInt(pesel.substring(4, 6), 10);

        if (miesiac >= 80) {
            rok += 1800;
            miesiac = miesiac - 80;
        }
        else if (miesiac >= 60) {
            rok += 2200;
            miesiac = miesiac - 60;
        }
        else if (miesiac >= 40) {
            rok += 2100;
            miesiac = miesiac - 40;
        }
        else if (miesiac >= 20) {
            rok += 2000;
            miesiac = miesiac - 20;
        }
        else {
            rok += 1900;
        }
        if (miesiac > 11) {
            return { 'invalidPesel': true };
        }
        var listaDni = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        if (dzien > listaDni[miesiac + 1]) {
            return { 'invalidPesel': true };
        }
        var dataUrodzenia = new Date();
        dataUrodzenia.setFullYear(rok, miesiac, dzien);
        var today = new Date();



        if (dataUrodzenia > today) // sprawdzenie czy data urodzenia  jest poprawna
        {
            return { 'invalidPesel': true };
        }

        // Weryfikacja numery PESEL
        var wagi = [9, 7, 3, 1, 9, 7, 3, 1, 9, 7];
        var sumaKontrolna = 0;

        for (var i = 0; i < wagi.length; i++) {
            sumaKontrolna += (parseInt(pesel.substring(i, i + 1), 10) * wagi[i]);
        }

        sumaKontrolna = sumaKontrolna % 10;

        if (sumaKontrolna != parseInt(pesel.substring(10, 11), 10)) {
            return { 'invalidPesel': true };
        }
        else {
            return null;
        }
        return { 'invalidPesel': true };
    }
}