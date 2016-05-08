import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {PacjentLista}  from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaFactory} from 'app/modules/wizyta/wizyta_factory.ts';


@Component({
    selector: "dodaj-skierowanie",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/wizyty/dodaj_skierowanie.html"
})

export class DodajSkierowanie implements OnInit {
    
   
    form: ControlGroup;
    success:boolean = false;
    
    
    constructor(public http: Http, fb: FormBuilder) 
    {
        this.form = fb.group({
            data_skierowania: ['', Validators.required],
            skierowanie_nazwa: ['', Validators.required],
            skierowanie_opis: ['', Validators.required]
        });

    }
    
    ngOnInit() {
       
    }
    onSubmit(values: any) 
    {
        
    }

    
}