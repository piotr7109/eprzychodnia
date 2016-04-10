
import {Component} from 'angular2/core';
import {Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {RejestracjaPacjenta} from '/app/components/rejestracja_pacjenta/rejestracja_pacjenta.ts';

@Component({
    selector: 'menu',
    templateUrl: "/app/views/menu/menu_lekarz.html",
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    { // Crisis Center child route
        path: '/rejestracja_pacjenta/...',
        name: 'RejestracjaPacjenta',
        component: RejestracjaPacjenta,
        useAsDefault: true
    },
    { path: '/rejestracja_pacjenta', name: 'RejestracjaPacjenta', component: RejestracjaPacjenta }
])


export class MenuLekarz {

}