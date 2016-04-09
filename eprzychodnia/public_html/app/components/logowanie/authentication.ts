// authentication.ts
import {Injectable} from 'angular2/core';
import {UzytkownikFactory} from "/app/modules/uzytkownik/uzytkownik_factory.ts";
import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";
import {Http} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/add/operator/share';
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
        return UzytkownikFactory.getIdUzytkownikaByLoginAndHaslo(this.http,uzytkownik);

    }

    logout() {
        /*
         * If we had a login api, we would have done something like this
    
        return this.http.get(this.config.serverUrl + '/auth/logout', {
          headers: new Headers({
            'x-security-token': this.token
          })
        })
        .map((res : any) => {
          this.token = undefined;
          localStorage.removeItem('token');
        });
         */
        this.token = undefined;
        localStorage.removeItem('token');

        return Rx.Observable.of(true);
    }
}
