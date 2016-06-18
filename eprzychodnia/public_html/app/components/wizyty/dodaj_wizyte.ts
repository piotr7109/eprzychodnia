import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate, RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaFactory} from 'app/modules/wizyta/wizyta_factory.ts';
import { ValidationService, ControlMessages } from '/app/services/form/form_helpers.ts';

@Component({
    selector: "dodaj-wizyte",
    directives: [FORM_DIRECTIVES, NgIf, ControlMessages],
    templateUrl: "app/views/wizyty/dodaj_wizyte.html"
})

export class DodajWizyte implements OnInit {


    pacjent: Uzytkownik new Uzytkownik();
    form: ControlGroup;
    success: boolean = false;
    id_pacjenta: number;


    constructor(public http: Http, fb: FormBuilder, public _routeParams: RouteParams) {
        this.form = fb.group({
            data_wizyty: ['', Validators.required],
            choroba_nazwa: ['', Validators.required],
            choroba_opis: ['', Validators.required]
        });

    }

    ngOnInit() {
        UzytkownikFactory.getUzytkownik(this.http, this._routeParams.get('id'))
            .subscribe(
            (pacjent: Pacjent) => {
                console.log(pacjent);
                this.pacjent = pacjent;

            });
    }
    onSubmit(values: any) {
        values.id_pacjenta = this.pacjent._id;
        values.id_lekarza = localStorage.getItem('token');
        let wizyta: Wizyta = WizytaFactory.fetchObject(values);
        wizyta.insert(this.http, wizyta).
            subscribe((success: boolean) => { this.success = success });
    }


}