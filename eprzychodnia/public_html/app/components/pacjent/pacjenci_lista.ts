import {Component, OoInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';

import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikLista}  from 'app/modules/uzytkownik/uzytkownik_lista.ts';



@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/pacjent/pacjenci_lista.html"
})

export class PacjenciLista implements OnInit {
    public pacjenci: Uzytkownik[];

    constructor(public http: Http, public router:Router) {

        console.log("constr");
    }

    ngOnInit() {
        UzytkownikLista.getPacjenciLista(this.http)
        .subscribe(
        (pacjenci:any) => {
            this.pacjenci = pacjenci;
           
        }
        );
    }
    onSelect(pacjent)
    {
         this.router.navigate(['PacjentHistoria',  { id: pacjent.id }]);
    }
}