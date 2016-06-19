import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';
import {NgIf} from 'angular2/common';

import {Uzytkownik} from 'app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikLista} from 'app/modules/uzytkownik/uzytkownik_lista.ts';

@Component({
    selector: "pracownicy-lista",
    templateUrl: "app/views/kontakt/kontakt.html"
})

export class Kontakt implements OnInit {
    public uzytkownicy:Uzytkownik[] = new Array();
    
    constructor(public http: Http, public router: Router) {

    }
    
    ngOnInit() {
        UzytkownikLista.getUzytkownicy(this.http)
        .subscribe(
        (uzytkownicy: any) => {
            for(let uz:Uzytkownik of uzytkownicy)
            {
                if((uz.typ_uzytkownika != 'pacjent') && (uz.typ_uzytkownika != 'admin'))
                {
                    this.uzytkownicy.push(uz);
                }
            }
            
        });
    }
    
    
}