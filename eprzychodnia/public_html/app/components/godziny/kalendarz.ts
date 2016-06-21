
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {Zmiany} from '/app/services/zmiany/zmiany.ts';
import {UzytkownikFactory} from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik} from '/app/modules/uzytkownik/uzytkownik.ts';

@Component({
    selector: "kalendarz";
    templateUrl: "/app/views/godziny/kalendarz.html";
})

export class Kalendarz implements OnInit
{
    public uzytkownik:Uzytkownik = new Uzytkownik();
    constructor(public fb: FormBuilder, public router: Router, public http: Http) 
    {
    }
    
    
    ngOnInit() {
        this.getUzytkownik();
        

    }
    getUzytkownik()
    {
        let id_uzytkownika = localStorage.getItem('token');
        UzytkownikFactory.getUzytkownik(this.http, id_uzytkownika).
            subscribe(
            (uzytkownik:Uzytkownik) =>{
                this.uzytkownik = uzytkownik;
                show_doctors_calendar(this.uzytkownik);
            });
    }
}

    