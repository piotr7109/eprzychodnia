import {BaseModule} from "app/modules/base_module.ts";
import {Database} from "app/components/config/database.ts";
import {Http, Headers} from 'angular2/http';

export class Uzytkownik extends BaseModule {
    protected _id: String;
    protected login: String;
    protected haslo: String;
    protected data_zalozenia: Date;
    protected imie: String;
    protected nazwisko: String;
    protected pesel: number;
    protected telefon: number;
    protected email: String;
    protected typ_uzytkownika: String;
    protected aktywny:String;
    

    constructor(private http: Http) {
        super();
        login = "ddda";
        haslo = "";
        data_zalozenia = "";
        imie = "";
        nazwisko = "";
        pesel = 0;
        telefon = 0;
        email = "";
        this.kategoria = "uzytkownik";
        this.typ_uzytkownika = "base_uzytkownik";
    }
    
    
    
    public getId(): String {
        return this._id;
    }
    public setId(id: String) {
        this._id = id;
    }
    public getLogin(): String {
        return this.login;
    }
    public setLogin(login: String) {
        this.login = login;
    }
    public getHaslo(): String {
        return this.haslo;
    }
    public setHaslo(haslo: String) {
        this.haslo = haslo;
    }
    public getDataZalozenia(): Date {
        return this.data_zalozenia;
    }
    public setDataZalozenia(data_zalozenia: Date) {
        this.data_zalozenia = data_zalozenia;
    }
    public setImie(imie: String) {
        this.imie = imie;
    }
    public getImie(): String {
        return this.imie;
    }
    public setNazwisko(nazwisko: String) {
        this.nazwisko = nazwisko;
    }
    public getNazwisko(): String {
        return this.nazwisko;
    }

    public setPesel(pesel: number) {
        this.pesel = pesel;
    }
    public getPesel(): number {
        return this.pesel;
    }
    public setTelefon(telefon: number) {
        this.telefon = telefon;
    }
    public getTelefon(): number {
        return this.telefon;
    }
    public setEmail(email: String) {
        this.email = email;
    }
    public getEmail(): String {
        return this.email;
    }
    public getTypUzytkownika(): String {
        return this.typ_uzytkownika
    }
    public setTypUzytkownika(typ_uzytkownika: String) {
        this.typ_uzytkownika = typ_uzytkownika;
    }
    public getAktywny():String
    {
        return this.aktywny;
    }
    public setAktywny(aktywny:String)
    {
        this.aktywny = aktywny;
    }

    public insert(http:Http, value:any) {
        value.kategoria = "uzytkownik";
        let db = Database.db;
        let headers = Database.getHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.post(db, JSON.stringify(value), {
            headers: headers
        })
        .map(res => res.json()).subscribe();
    }
    public update(http:Http, value:any)
    {
        let db = Database.db;
        let headers = Database.getHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.put(db+"/"+value._id, JSON.stringify(value), {
            headers: headers
        })
        .map(res => return res.json());
    }

}
