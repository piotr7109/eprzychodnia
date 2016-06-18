import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';
import {NgIf} from 'angular2/common';

import {LekarzFactory}  from 'app/modules/uzytkownik/lekarz/lekarz_factory.ts';
import {Lekarz}  from 'app/modules/uzytkownik/lekarz/lekarz.ts';
import {Pacjent}  from 'app/modules/uzytkownik/pacjent/pacjent.ts';
import {PacjentLista}  from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';


@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/pacjent/pacjenci_lista.html"
})

export class PacjenciLista implements OnInit {
    public pacjenci: Pacjent[];

    constructor(public http: Http, public router: Router) {

    }

    ngOnInit() {
        PacjentLista.getPacjenciLista(this.http)
            .subscribe(
            (pacjenci: any) => {
                this.pacjenci = pacjenci;
                for (let i = 0; i < pacjenci.length; i++)
                    this.getLekarz(pacjenci[i].getIdLekarza(), i);
            });
    }
    onSelect(pacjent) {
        this.router.navigate(['PacjentHistoria', { id: pacjent._id }]);
    }
    przypiszPacjenta(i) {
        this.pacjenci[i].id_lekarza = localStorage.getItem('token');
        this.pacjenci[i].update(this.http, this.pacjenci[i])
            .subscribe(() => { this.getLekarz(this.pacjenci[i].getIdLekarza(), i) });
    }
    getLekarz(id: number, j): Lekarz {
        return LekarzFactory.getUzytkownik(this.http, id)
            .subscribe((uz: Lekarz) => {
                this.pacjenci[j].setLekarz(uz);
            });

    }
    getDaneLekarza(index) {
        let uz: Lekarz = this.pacjenci[index].lekarz;
        if (uz) {
            if (uz.getImie() && uz.getNazwisko())
                return uz.getImie() + " " + uz.getNazwisko();
            else
                return "Pacjent nieprzypisany";
        }
    }
    czyPrzypisany(index) {
        let uz: Uzytkownik = this.pacjenci[index].getLekarz();
        if (uz) {
            if (uz.getImie() && uz.getImie())
                return true;
            else
                return false;
        }
    }
}