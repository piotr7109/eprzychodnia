import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";
import {Database} from "/app/components/config/database.ts";
import {Http} from 'angular2/http';

export class UzytkownikFactory {

    static fetchObject(row: any): Uzytkownik {
        var uz = new Uzytkownik();
        uz.setId(row._id);
        uz.setLogin(row.login);
        uz.setHaslo(row.haslo);

        return uz;
    }
    static getUzytkownik(http:Http,     id: number) {
        var db = Database.db;
        var query = id;
        return http.get(db + query)
            .map((res: any) => {
                let data = res.json();
                
                if (data!= null) {
                    return UzytkownikFactory.fetchObject(data);
                }
                return null;
            });
    }

    static getIdUzytkownikaByLoginAndHaslo(http: Http, uzytkownik: Uzytkownik): number {
        let db = Database.db;
        let query = sprintf('_design/users/_view/getUser?key=["%1$s","%2$s"]', uzytkownik.getLogin(), uzytkownik.getHaslo());

        return http.get(db + query)
            .map((res: any) => {
                let data = res.json();
                if (data.rows.length > 0) {
                    let id = data.rows[0].id;
                    return id;
                }
                return Rx.Observable.throw('authentication failure');
            });


    }
}
