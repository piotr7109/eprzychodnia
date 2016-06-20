    import {Component, OnChanges} from 'angular2/core';
import {NgIf} from 'angular/common';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {Authentication} from 'app/components/logowanie/authentication.ts';

import {RejestracjaPacjenta} from 'app/components/pacjent/rejestracja_pacjenta.ts';
import {PacjenciLista} from 'app/components/pacjent/pacjenci_lista.ts';
import {PacjenciLekarza} from 'app/components/pacjent/pacjenci_lekarza.ts';
import {PacjentHistoria} from 'app/components/pacjent/pacjent_historia.ts';

import {DodajTermin} from "app/components/termin/dodaj_termin.ts";
import {Godziny} from "/app/components/godziny/godziny.ts";
import {Kalendarz} from "/app/components/godziny/kalendarz.ts";

import {LogowanieComponent} from 'app/components/logowanie/logowanie.component.ts';
import {LogowaniePacjenta} from 'app/components/logowanie/logowanie_pacjenta.ts';
import {LogowanieLekarza} from 'app/components/logowanie/logowanie_lekarza.ts';

import {DodajWizyte} from 'app/components/wizyty/dodaj_wizyte.ts';
import {DodajSkierowanie} from 'app/components/wizyty/dodaj_skierowanie.ts';
import {DodajRecepte} from '/app/components/wizyty/dodaj_recepte.ts';
import {WizytaSzczegoly} from '/app/components/wizyty/wizyta_szczegoly.ts';

import {DodajZamowienie} from '/app/components/zamowienia/dodaj_zamowienie.ts';

import {Home} from 'app/components/home/home.ts';
import {Epop} from 'app/components/home/epop.ts';

import {Kontakt} from 'app/components/kontakt/kontakt.ts';

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
    { path: '/pacjenci_lekarza', name: 'PacjenciLekarza', component: PacjenciLekarza },
    { path: '/dodaj_termin', name: 'DodajTermin', component: DodajTermin },
    { path: '/dodaj_skierowanie', name: 'DodajSkierowanie', component: DodajSkierowanie },
    { path: '/dodaj_recepte', name: 'DodajRecepte', component: DodajRecepte },
    { path: '/wizyta_szczegoly', name: 'WizytaSzczegoly', component: WizytaSzczegoly },
    { path: '/godziny', name: 'Godziny', component: Godziny },
    { path: '/kalendarz', name: 'Kalendarz', component: Kalendarz },
    { path: '/main', name: 'Epop', component: Epop },
    { path: '/kontakt', name: 'Kontakt', component: Kontakt },
    { path: '/dodaj_zamowienie', name: 'DodajZamowienie', component: DodajZamowienie }
    
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
        localStorage.setItem('typ_uzytkownika', "DEFAULT");
        this.router.navigate(['../Logowanie']);
        
    }



}
