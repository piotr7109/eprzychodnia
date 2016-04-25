import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {LekarzLista}  from 'app/modules/uzytkownik/lekarz/lekarz_lista.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Termin} from '/app/modules/termin/termin.ts';


@Component({
    selector: "dodaj-termin",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/terminy/dodaj_termin.html"
})

export class DodajTermin implements OnInit {
    
   
    lekarze:Lekarz[];
    form: ControlGroup;
    success:boolean = false;
    selected_lekarz:Lekarz;
    
    
    constructor(public http: Http, fb: FormBuilder) 
    {
        this.form = fb.group({
            data: ['', Validators.required],
            godzina: ['', Validators.required],
            
        });

    }
    
    ngOnInit() {
        LekarzLista.getLekarzeLista(this.http)
        .subscribe(
        (lekarze:Lekarz[]) => {
            this.lekarze = lekarze;
            this.selected_lekarz = lekarze[0];
           
        });
    }
    onChange(lekarz) {
        this.selected_lekarz = lekarz;
    }
    onSubmit(values: any) 
    {
        let termin:Termin = new Termin();
        termin.setData(values.data);
        termin.setGodzina(values.godzina);
        termin.setIdPacjenta(localStorage.getItem('token'));
        this.selected_lekarz.addTermin(termin);
        this.selected_lekarz.update(this.http, this.selected_lekarz)
        .subscribe((success: boolean) => {this.success = success} );;

    }

    
}