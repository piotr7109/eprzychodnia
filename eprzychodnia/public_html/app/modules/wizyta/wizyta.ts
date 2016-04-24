import {BaseModule} from "/app/modules/base_module.ts";
import {Database} from "/app/components/config/database.ts";
import {Http, Headers} from 'angular2/http';

export class Wizyta extends BaseModule {
    protected id: number;
    protected id_pacjenta: number;
    protected data_wizyty: Date;
    protected id_lekarza: number;
    protected choroba_nazwa: String;
    protected choroba_opis: String;

    constructor(private http: Http) {
        super();
        this.kategoria = "wizyta";
    }

    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    getIdPacjenta(): number {
        return this.id_pacjenta;
    }
    setIdPacjenta(id_pacjenta: number) {
        this.id_pacjenta = id_pacjenta;
    }
    getDataWizyty(): Date {
        return this.data_wizyty;
    }
    setDataWizyty(data_wizyty: Date) {
        this.Data_wizyty = data_wizyty;
    }
    getIdLekarza(): number {
        return this.id_lekarza;
    }
    setIdLekarza(id_lekarza: number) {
        this.id_lekarza = id_lekarza;
    }
    getChorobaNazwa(): String {
        return this.choroba_nazwa;
    }
    setChorobaNazwa(choroba_nazwa: String) {
        this.choroba_nazwa = choroba_nazwa;
    }
    getChorobaOpis(): String {
        return this.choroba_opis;
    }
    setChorobaOpis(choroba_opis: String) {
        this.choroba_opis = choroba_opis;
    }




    insert(http: Http, value: any) {
        
        value.kategoria = "wizyta";
        let db = Database.db;
        let headers = Database.getHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.post(db, JSON.stringify(value), {
            headers: headers
        })
            .map(res => {res.json(); return true});
    }

}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


