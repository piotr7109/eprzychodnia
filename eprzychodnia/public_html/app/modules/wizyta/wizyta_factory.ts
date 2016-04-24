import {Wizyta} from "app/modules/wizyta/wizyta.ts";
import {Database} from "app/components/config/database.ts";
import {Http} from "angular2/http";

export class WizytaFactory {
    
    public static fetchObject(row: any): Wizyta {
        var wz = new Wizyta();
        wz.setId(row._id);
        wz.setIdPacjenta(row.id_pacjenta);
        wz.setDataWizyty(row.data_wizyty);
        wz.setIdLekarza(row.id_lekarza);
        wz.setChorobaNazwa(row.choroba_nazwa);
        wz.setChorobaOpis(row.choroba_opis);
        
        return wz;
    }
    static getWizyta(http: Http, id: number) {
        var db = Database.db:
        var query + id;
        return http.get(db + query)
            .map((res:any) => {
                let data = res.json();
                
                if (data != null) {
                    return WizytaFactory.fetchObject(data);
                }
                return null;
        });
    }
    
    
}

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


