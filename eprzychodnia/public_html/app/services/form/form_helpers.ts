
import { Component, Host } from 'angular2/core';
import { NgFormModel } from 'angular2/common';
     
@Component({
  selector: 'control-messages',
  inputs: ['controlName: control'],
  template: `<div *ngIf="errorMessage !== null">{{errorMessage}}</div>`
})
export class ControlMessages {
  controlName: string;
  constructor(@Host() private _formDir: NgFormModel) { }
     
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
        if (control.value.match(/^[0-9]*$/)) {
            return null;
        } else {
            return { 'invalidPesel': true };
        }
    }
}