import {Router, CanActivate, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {provide} from 'angular2/core';
import {bootstrap} from 'angular2/platform/browser';
import {MenuLekarz}  from '/app/components/menu/menu_lekarz.ts';
import {MenuPacjent}  from '/app/components/menu/menu_lekarz.ts';
import {MenuAsystent}  from '/app/components/menu/menu_lekarz.ts';
import {MenuPielegniarka}  from '/app/components/menu/menu_lekarz.ts';


export function ladujMenu() {
    let typ: String = localStorage.getItem('typ_uzytkownika');

    switch (typ) {
        case "lekarz":
            bootstrap(MenuLekarz, [ROUTER_PROVIDERS,
                provide(LocationStrategy, { useClass: HashLocationStrategy })]);
            break;
        case "pacjent":
            bootstrap(MenuPacjent, [ROUTER_PROVIDERS,
                provide(LocationStrategy, { useClass: HashLocationStrategy })]);
            break;
        case "asystent":
            bootstrap(MenuAsystent, [ROUTER_PROVIDERS,
                provide(LocationStrategy, { useClass: HashLocationStrategy })]);
            break;
        case "pielegniarka":
            bootstrap(MenuPielegniarka, [ROUTER_PROVIDERS,
                provide(LocationStrategy, { useClass: HashLocationStrategy })]);
            break;
    }
}