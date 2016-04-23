import {Component, OoInit} from 'angular2/core';
import {Uzytkownik}  from '/app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikLista}  from '/app/modules/uzytkownik/uzytkownik_lista.ts';
import {Http} from 'angular2/http';


@Component({
    selector: "pacjenci-lista",
    templateUrl: "/app/views/pacjent/pacjenci_lista.html"
})

export class PacjenciLista implements OnInit {
    public pacjenci: Uzytkownik[];

    constructor(public http: Http) {

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
}