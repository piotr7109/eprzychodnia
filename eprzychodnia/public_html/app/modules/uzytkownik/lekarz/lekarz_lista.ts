import {UzytkownikLista} from '/app/modules/uzytkownik/uzytkownik_lista.ts';
import {Database} from "app/components/config/database.ts";
import {LekarzFactory} from '/app/modules/uzytkownik/lekarz/lekarz_factory.ts';

export class LekarzLista extends UzytkownikLista
{
    static getLekarzeLista(http: Http) {
        var db = Database.db;
        var query = "_design/users/_view/lekarze_lista";
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();
                let lekarze: Array = new Array();
                if (data != null) {
                    let ilosc = data.total_rows;
                    for (var i = 0; i < ilosc; i++) {
                        lekarze[i] = LekarzFactory.fetchObject(data.rows[i].value);
                    }

                    return lekarze;
                }
                return null;
            });
    }
}