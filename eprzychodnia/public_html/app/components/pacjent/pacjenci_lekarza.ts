import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';
import {NgIf} from 'angular2/common';

import {PacjentLista} from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';

import {PacjenciLista} from 'app/components/pacjent/pacjenci_lista.ts';

@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/pacjent/pacjenci_lista.html"
})

export class PacjenciLekarza extends PacjenciLista implements OnInit {
    public pacjenci: Pacjent[];

    constructor(public http: Http, public router:Router) {
        
    }
    ngOnInit() {
        PacjentLista.getPacjenciLekarzaLista(this.http, localStorage.getItem('token'))
        .subscribe(
        (pacjenci:any) => {
            this.pacjenci = pacjenci;  
            for(let i=0; i< pacjenci.length; i++ ) 
               this.getLekarz(pacjenci[i].getIdLekarza(),i);     
        });
    }
}