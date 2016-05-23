import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate,RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {PacjentLista}  from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaFactory} from 'app/modules/wizyta/wizyta_factory.ts';
import {Skierowanie} from '/app/modules/wizyta/skierowanie/skierowanie.ts';


@Component({
    selector: "dodaj-skierowanie",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/wizyty/dodaj_skierowanie.html"
})

export class DodajSkierowanie implements OnInit {
    
   
    form: ControlGroup;
    success:boolean = false;
    protected wizyta:Wizyta;
    
    
    constructor(public http: Http, fb: FormBuilder,private _routeParams: RouteParams,) 
    {
        this.form = fb.group({
            data: ['', Validators.required],
            nazwa: ['', Validators.required],
            opis: ['', Validators.required]
        });

    }
    
    ngOnInit() 
    {
       let id:number = this._routeParams.get('id');
       WizytaFactory.getWizyta(this.http, id )
       .subscribe((wizyta:Wizyta) =>{
           this.wizyta = wizyta;
       });
    }
    onSubmit(values: any) 
    {
        let item:Skierowanie = new Skierowanie();
        item.data = values.data;
        item.nazwa = values.nazwa;
        item.opis = values.opis;
        this.wizyta.addSkierowanie(item);
        this.wizyta.update(this.http)
        .subscribe((w:Wizyta)=>{
            console.log(w);
        });
    }

    
}