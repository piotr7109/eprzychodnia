import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';

import {ZamowienieLista}  from 'app/modules/zamowienie/zamowienie_lista.ts';
import {Zamowienie}  from 'app/modules/zamowienie/zamowienie.ts';
import {Sprzet}  from 'app/modules/zamowienie/sprzet.ts';

@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/zamowienia/lista_zamowien.html"
})

export class ListaZamowien implements OnInit {
    public zamowienia: Zamowienie[];

    constructor(public http: Http, public router: Router) {

    }

    ngOnInit() {
        ZamowienieLista.getZamowienia(this.http)
            .subscribe(
            (zam: Zamowienie[]) => {
                this.zamowienia = zam;
                
            });
    }

    zrealizujZamowienie(i) {
        this.zamowienia[i].aktywny = "N";
        this.zamowienia[i].update(this.http)
        .subscribe(() => { this.ngOnInit();  });
    }
}