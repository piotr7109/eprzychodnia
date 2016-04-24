import {Wizyta} from "app/modules/wizyta/wizyta.ts";
import {WizytaFactory} from "app/modules/wizyta/wizyta_factory.ts";
import {Database} from "app/components/config/database.ts";
import {Http} from 'angular2/http';

export class WizytaLista {


    static getWizytyPacjenta(http: Http, id_pacjenta:number) {
        let db = Database.db;
        let query = sprintf('_design/users/_view/getWizytyPacjenta?key="%1$s"', id_pacjenta);
        return http.get(db + query)
            .map((res: any) => {
                let data = res.json();
                let wizyty: Array = new Array();
                if (data != null) {
                    let ilosc = data.rows.length;
                    for (var i = 0; i < ilosc; i++) 
                    {
                        wizyty[i] = WizytaFactory.fetchObject(data.rows[i].value);
                    }
                    return wizyty;
                }
                return null;
            });
    }

}
