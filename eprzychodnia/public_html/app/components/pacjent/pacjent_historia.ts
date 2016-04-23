import {Component, OoInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Http} from 'angular2/http';

import {Uzytkownik} from '/app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikFactory} from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Wizyta} from '/app/modules/wizyta/wizyta.ts';
import {WizytaLista} from '/app/modules/wizyta/wizyta_lista.ts'

@Component({
    selector: "pacjent-historia",
    templateUrl: "/app/views/pacjent/pacjent_historia.html";
})

export class PacjentHistoria implements OnInit
{
    pacjent:Uzytkownik = new Uzytkownik();
    wizyty:Wizyta[];
    constructor(private _router: Router, private _routeParams: RouteParams, public http:Http)
    {
        
    }
    
    ngOnInit()
    {
        let id:number = this._routeParams.get('id');
        UzytkownikFactory.getUzytkownik(this.http, id)
            .subscribe((pacjent:Uzytkownik) =>
            { 
                this.pacjent = pacjent; 
                WizytaLista.getWizytyPacjenta(this.http, pacjent.id)
                .subscribe((wizyty:any) => {this.wizyty = wizyty})
            });
    }
    
}