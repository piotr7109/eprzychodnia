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
    getId_pacjenta(): number {
        return this.id_pacjenta;
    }
    setId_pacjenta(id_pacjenta: number) {
        this.id_pacjenta = id_pacjenta;
    }
    getData_wizyty(): Date {
        return this.data_wizyty;
    }
    setData_wizyty(data_wyzyty: Date) {
        this.Data_wizyty = data_wizyty;
    }
    getId_lekarza(): number {
        return this.id_lekarza;
    }
    setId_lekarza(id_lekarza: number) {
        this.id_lekarza = id_lekarza;
    }
    getChoroba_nazwa(): String {
        return this.choroba_nazwa;
    }
    setChoroba_nazwa(choroba_nazwa: String) {
        this.choroba_nazwa = choroba_nazwa;
    }
    getChoroba_opis(): String {
        return this.choroba_opis;
    }
    setChoroba_opis(choroba_opis: String) {
        this.choroba_opis = choroba_opis;
    }




    insert(http: Http, value: any) {
        let db = Database.db;
        let headers = new Headers();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.post(db, JSON.stringify(value), {
            headers: headers
        })
            .map(res => res.json()).subscribe();
    }

}/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


