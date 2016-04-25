import {Component, OoInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';

import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {Pacjent}  from 'app/modules/uzytkownik/pacjent/pacjent.ts';
import {PacjentLista}  from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';


@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/pacjent/pacjenci_lista.html"
})

export class PacjenciLista implements OnInit {
    public pacjenci: Pacjent[];

    constructor(public http: Http, public router:Router) {

        console.log("constr");
    }

    ngOnInit() {
        PacjentLista.getPacjenciLista(this.http)
        .subscribe(
        (pacjenci:any) => {
            this.pacjenci = pacjenci;
           
        }
        );
    }
    onSelect(pacjent)
    {
        this.router.navigate(['PacjentHistoria',  { id: pacjent._id }]);
    }
    przypiszPacjenta(pacjent:Pacjent)
    {
        pacjent.id_lekarza = localStorage.getItem('token');
        pacjent.update(this.http, pacjent);
    }
}