import {Zamowienie} from "app/modules/zamowienie/zamowienie.ts";
import {Database} from "app/components/config/database.ts";
import {Http} from 'angular2/http';

export class ZamowienieLista {

    static getZamowienia(http: Http) {
        let db = Database.db;
        let query = "_design/users/_view/getZamowienia";
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();
                let zam: Array = new Array();
                if (data != null) {
                    let ilosc = data.total_rows;
                    for (var i = 0; i < ilosc; i++) {
                        zam[i] = ZamowienieLista.fetchObject(data.rows[i].value);
                    }
                    return zam;
                }
                return null;
            });


    }
    static fetchObject(row:any)
    {
        let item = new Zamowienie();
        item._id = row._id;
        item._rev = row._rev;
        item.aktywny = row.aktywny;
        item.sprzet = row.sprzet;
        return item;
    }
