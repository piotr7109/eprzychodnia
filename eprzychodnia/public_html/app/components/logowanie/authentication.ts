// authentication.ts
import {Injectable} from 'angular2/core';
import {UzytkownikFactory} from "/app/modules/uzytkownik/uzytkownik_factory.ts";
import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import {Rx} from 'rxjs/add/operator/share';
import 'rxjs/add/operator/map';
import {Database} from "/app/components/config/database.ts"


@Injectable()
export class Authentication {
    token: string;

    constructor(public http: Http) {
        this.token = localStorage.getItem('token');
    }

    login(login: String, haslo: String) {

        let uzytkownik = new Uzytkownik();
        uzytkownik.setLogin(login);
        uzytkownik.setHaslo(haslo);
        return UzytkownikFactory.getIdUzytkownikaByLoginAndHaslo(this.http, uzytkownik);

    }

    logout() {

        this.token = undefined;
        localStorage.removeItem('token');
        localStorage.removeItem('typ_uzytkownika');

        return Rx.Observable.of(true);
    }
}
