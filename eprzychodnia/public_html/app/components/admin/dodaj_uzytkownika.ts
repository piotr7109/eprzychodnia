import {Component,OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Pacjent} from 'app/modules/uzytkownik/pacjent/pacjent.ts';
import {PacjentFactory} from 'app/modules/uzytkownik/pacjent/pacjent_factory.ts';
import {UzytkownikFactory} from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Http} from 'angular2/http';
import { ValidationService, ControlMessages } from '/app/services/form/form_helpers.ts';

@Component({
    selector: 'rejestracja-pacjenta',
    directives: [FORM_DIRECTIVES, NgIf,ControlMessages],
    templateUrl: "app/views/admin/dodaj_uzytkownika.html"

})

export class DodajUzytkownika implements OnInit()
{
    form: ControlGroup;
    duplikat: boolean = false;
    public success = false;
    public selected_typ:String = "lekarz";
    public typy_uzytkownikow:Array = new Array("lekarz","asystent","pielegniarka","pacjent");
    constructor(fb: FormBuilder,  public router: Router, public http:Http) {
        this.form = fb.group({
            login: ['', Validators.required],
            haslo: ['', Validators.required],
            typ_uzytkownika: ['', null],
            imie: ['', Validators.required],
            nazwisko: ['', Validators.required],
            pesel: ['', Validators.compose([Validators.required, ValidationService.peselValidator])],
            telefon: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            email : ['', Validators.compose([Validators.required, ValidationService.emailValidator])]
        });
    }
    ngOnInit()
    {
        init_rejestracja_pacjenta();
    }
    setTypUzytkownika(event)
    {
        this.selected_typ = event;
    }

    onSubmit(value: any) {
        this.success = false;
        this.duplikat = false;
        let uz:Pacjent = PacjentFactory.fetchObject( value);
        uz.kategoria = "uzytkownik";
        uz.typ_uzytkownika = this.selected_typ;
        UzytkownikFactory.getUzytkownikByLogin(this.http, uz.login).subscribe((value: boolean) => {
            if(value)
            {
                uz.insert(this.http,uz);
                this.success = true;
            }
            else
            {
                this.duplikat = true; 
            }    
        }
        
    }
}