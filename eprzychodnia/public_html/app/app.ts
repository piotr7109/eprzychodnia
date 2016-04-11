import {Component, OnChanges} from 'angular2/core';
import {NgIf} from 'angular/common';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RejestracjaPacjenta} from '/app/components/pacjent/rejestracja_pacjenta.ts';
import {PacjenciLista} from '/app/components/pacjent/pacjenci_lista.ts';
import {LogowanieComponent} from '/app/components/logowanie/logowanie.component.ts';
import {Home} from '/app/components/home/home.ts';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, Home],
    templateUrl: "/app/views/app.html"


})


@RouteConfig([
    { path: '/', redirectTo: ['Logowanie'] },
    { path: '/logowanie', name: 'Logowanie', component: LogowanieComponent },
    { path: '/home', name: 'Home', component: Home },
    { path: '/rejestracja_pacjenta', name: 'RejestracjaPacjenta', component: RejestracjaPacjenta },
    { path: '/pacjenci_lista', name: 'PacjenciLista', component: PacjenciLista }
])

export class App implements OnChanges  {
    public typ_uzytkownika: String = "DEFAULT";
    constructor(public router: Router) {
        router.subscribe((val) => this.typ_uzytkownika = localStorage.getItem('typ_uzytkownika'))

    }

    


    ngOnInit() {
        this.typ_uzytkownika = localStorage.getItem('typ_uzytkownika');
    }
    ngOnChanges( changes) {
        console.log(changes);
    }




}