import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {PacjentLista}  from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaFactory} from 'app/modules/wizyta/wizyta_factory.ts';


@Component({
    selector: "dodaj-wizyte",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/wizyty/dodaj_wizyte.html"
})

export class DodajWizyte implements OnInit {
    
   
    pacjenci:Pacjent[];
    selected_pacjent:Uzytkownik;
    form: ControlGroup;
    success:boolean = false;
    id_pacjenta:number;
    
    
    constructor(public http: Http, fb: FormBuilder) 
    {
        this.form = fb.group({
            data_wizyty: ['', Validators.required],
            choroba_nazwa: ['', Validators.required],
            choroba_opis: ['', Validators.required]
        });

    }
    
    ngOnInit() {
        PacjentLista.getPacjenciLista(this.http)
        .subscribe(
        (pacjenci:Pacjent[]) => {
            this.pacjenci = pacjenci;
            
            this.id_pacjenta = pacjenci[0].getId();
           
        });
    }
    onChange(id_pacjenta) {
        this.id_pacjenta = id_pacjenta;
    }
    onSubmit(values: any) 
    {
        values.id_pacjenta = this.id_pacjenta;
        values.id_lekarza = localStorage.getItem('token');
        let wizyta:Wizyta = WizytaFactory.fetchObject( values);
        wizyta.insert(this.http, wizyta).
            subscribe((success: boolean) => {this.success = success} );
    }

    
}