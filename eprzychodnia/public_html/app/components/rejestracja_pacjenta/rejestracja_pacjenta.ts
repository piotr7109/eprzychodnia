import {Component,OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Uzytkownik} from '/app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikFactory} from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Http} from 'angular2/http';

@Component({
    selector: 'rejestracja-pacjenta',
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "/app/views/rejestracja_pacjenta/rejestracja_pacjenta.html"

})

export class RejestracjaPacjenta implements OnInit()
{
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder,  public router: Router, public http:Http) {
        this.form = fb.group({
            login: ['', Validators.required],
            haslo: ['', Validators.required],
            imie: ['', Validators.required],
            nazwisko: ['', Validators.required]
        });
    }
    ngOnInit()
    {
    }

    onSubmit(value: any) {

        let uz:Uzytkownik = UzytkownikFactory.fetchObject( value);
        uz.insert(this.http,value);
        
    }
}