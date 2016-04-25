import {Component, OnChanges} from 'angular2/core';
import {NgIf} from 'angular/common';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Authentication} from 'app/components/logowanie/authentication.ts';

import {RejestracjaPacjenta} from 'app/components/pacjent/rejestracja_pacjenta.ts';
import {PacjenciLista} from 'app/components/pacjent/pacjenci_lista.ts';
import {PacjenciLekarza} from 'app/components/pacjent/pacjenci_lekarza.ts';
import {PacjentHistoria} from 'app/components/pacjent/pacjent_historia.ts';

import {DodajTermin} from "/app/components/termin/dodaj_termin.ts";

import {LogowanieComponent} from 'app/components/logowanie/logowanie.component.ts';
import {LogowaniePacjenta} from 'app/components/logowanie/logowanie_pacjenta.ts';
import {LogowanieLekarza} from 'app/components/logowanie/logowanie_lekarza.ts';
import {DodajWizyte} from 'app/components/wizyty/dodaj_wizyte.ts';
import {Home} from 'app/components/home/home.ts';


@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, Home],
    templateUrl: "app/views/app.html"


})


@RouteConfig([
    { path: '/', redirectTo: ['Logowanie'] },
    { path: '/logowanie', name: 'Logowanie', component: LogowanieComponent },
    { path: '/logowanie_lekarza', name: 'LogowanieLekarza', component: LogowanieLekarza},
    { path: '/logowanie_pacjenta', name: 'LogowaniePacjenta', component: LogowaniePacjenta},
    { path: '/home', name: 'Home', component: Home },
    { path: '/rejestracja_pacjenta', name: 'RejestracjaPacjenta', component: RejestracjaPacjenta },
    { path: '/pacjenci_lista', name: 'PacjenciLista', component: PacjenciLista },
    { path: '/dodaj_wizyte', name: 'DodajWizyte', component: DodajWizyte },
    { path: '/pacjent_historia', name: 'PacjentHistoria', component: PacjentHistoria },
    { path: '/pacjentci_lekarza', name: 'PacjenciLekarza', component: PacjenciLekarza },
    { path: '/dodaj_termin', name: 'DodajTermin', component: DodajTermin }
])

export class App implements OnChanges  {
    public typ_uzytkownika: String = "DEFAULT";
    constructor(public router: Router, public auth:Authentication) {
        router.subscribe((val) => this.typ_uzytkownika = localStorage.getItem('typ_uzytkownika'))

    }

    


    ngOnInit() {
        this.typ_uzytkownika = localStorage.getItem('typ_uzytkownika');
        
    }
    ngOnChanges( changes) {
        console.log(changes);
    }

    onLogout() {
        this.auth.logout();
        this.router.navigate(['../Logowanie']);
        
    }



}
