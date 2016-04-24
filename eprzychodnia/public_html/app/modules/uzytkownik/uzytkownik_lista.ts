import {Uzytkownik} from "app/modules/uzytkownik/uzytkownik.ts";
import {UzytkownikFactory} from "app/modules/uzytkownik/uzytkownik_factory.ts";
import {Database} from "app/components/config/database.ts";
import {Http} from 'angular2/http';

export class UzytkownikLista {


    static getPacjenciLista(http: Http) {
        var db = Database.db;
        var query = "_design/users/_view/pacjenci_lista";
        return http.get(db + query)
            .map((res: any) => {
                let data = res.json();
                let uzytkownicy: Array = new Array();
                if (data != null) {
                    let ilosc = data.total_rows;
                    for (var i = 0; i < ilosc; i++) {
                        uzytkownicy[i] = UzytkownikFactory.fetchObject(data.rows[i].value);
                    }
                    return uzytkownicy;
                }
                return null;
            });
    }

}
