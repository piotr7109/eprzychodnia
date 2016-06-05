import {Uzytkownik} from "app/modules/uzytkownik/uzytkownik.ts";
import {Database} from "app/components/config/database.ts";
import {Http} from 'angular2/http';

export class UzytkownikFactory {

    public static fetchObject(row: Uzytkownik): Uzytkownik {
        let uz:Uzytkownik = new Uzytkownik();
        uz.setId(row._id);
        uz.setLogin(row.login);
        uz.setHaslo(row.haslo);
        uz.setDataZalozenia(row.data_zalozenia);
        uz.setImie(row.imie);
        uz.setNazwisko(row.nazwisko);
        uz.setPesel(row.pesel);
        uz.setTelefon(row.telefon);
        uz.setEmail(row.email);
        uz.setTypUzytkownika(row.typ_uzytkownika);
        uz.setAktywny(row.aktywny);
        uz.setRev(row._rev);
        uz.godziny = row.godziny;
        
        return uz;
    }
    static getUzytkownik(http: Http, id: number) {
        var db = Database.db;
        var query = id;
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();

                if (data != null) {
                    return UzytkownikFactory.fetchObject(data);
                }
                return null;
            });
    }

    static getIdUzytkownikaByLoginAndHaslo(http: Http, uzytkownik: Uzytkownik): number {
        let db = Database.db;
        let query = sprintf('_design/users/_view/getUser?key=["%1$s","%2$s"]', uzytkownik.getLogin(), uzytkownik.getHaslo());
        return http.get(db + query, {
            headers: Database.getHeaders()
        })
            .map((res: any) => {
                let data = res.json();
                console.log(data.rows.length);
                if (data.rows.length > 0) {

                    let uz: Uzytkownik = new Uzytkownik();
                    uz.setId(data.rows[0].id);
                    uz.setTypUzytkownika(data.rows[0].value);

                    return uz;
                }
                return Rx.Observable.throw('authentication failure');
            });


    }
}
