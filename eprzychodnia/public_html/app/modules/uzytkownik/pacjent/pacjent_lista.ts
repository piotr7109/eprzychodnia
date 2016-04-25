import {UzytkownikLista} from '/app/modules/uzytkownik/uzytkownik_lista.ts';
import {Database} from "app/components/config/database.ts";
import {Pacjent} from '/app/modules/uzytkownik/pacjent/pacjent.ts';
import {PacjentFactory} from '/app/modules/uzytkownik/pacjent/pacjent_factory.ts';

export class PacjentLista extends UzytkownikLista
{
    static getPacjenciLista(http: Http) {
        var db = Database.db;
        var query = "_design/users/_view/pacjenci_lista";
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();
                let pacjenci: Array = new Array();
                if (data != null) {
                    let ilosc = data.total_rows;
                    for (var i = 0; i < ilosc; i++) {
                        pacjenci[i] = PacjentFactory.fetchObject(data.rows[i].value);
                    }

                    return pacjenci;
                }
                return null;
            });
    }
    static getPacjenciLekarzaLista(http: Http, id_lekarza:number) {
        var db = Database.db;
        var query = '_design/users/_view/pacjenciLekarz_lista?key="'+id_lekarza+'"';
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();
                let pacjenci: Array = new Array();
                if (data != null) {
                    let ilosc = data.total_rows;
                    for (var i = 0; i < ilosc; i++) {
                        pacjenci[i] = PacjentFactory.fetchObject(data.rows[i].value);
                    }

                    return pacjenci;
                }
                return null;
            });
    }
}