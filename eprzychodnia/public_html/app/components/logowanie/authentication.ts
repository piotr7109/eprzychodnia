// authentication.ts
import {Injectable} from 'angular2/core';
import {UzytkownikFactory} from "/app/modules/uzytkownik/uzytkownik_factory.ts";
import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";

@Injectable()
export class Authentication {
    token: string;

    constructor() {
        this.token = localStorage.getItem('token');
    }

    login(login: String, haslo: String) {

        let uzytkownik = new Uzytkownik();
        uzytkownik.setLogin(login);
        uzytkownik.setHaslo(haslo);
        return UzytkownikFactory.getIdUzytkownikaByLoginAndHaslo(uzytkownik)
            .then(function(result) {
                if (result.rows.length > 0) {
                    console.log("A");
                    var row = result.rows[0];
                    uzytkownik = UzytkownikFactory.fetchObject(row);
                    this.token = uzytkownik.getId();
                    localStorage.setItem('token', this.token);
                    console.log("B");
                }
                else {
                    uzytkownik = null;
                }

            }).catch(function(err) {
                // handle any errors
            });
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
