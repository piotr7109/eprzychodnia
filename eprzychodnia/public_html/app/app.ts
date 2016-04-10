import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {RejestracjaPacjenta} from '/app/components/rejestracja_pacjenta/rejestracja_pacjenta.ts';
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
    { path: '/rejestracja_pacjenta', name: 'RejestracjaPacjenta', component: RejestracjaPacjenta }
])

export class App {
    constructor(public router: Router) {
    }



}