import {BaseModule} from "/app/modules/base_module.ts";

export class Uzytkownik extends BaseModule {
    protected id: number;
    protected login: String;
    protected haslo: String;
    protected data_zalozenia: Date;
    protected imie: String;
    protected nazwisko: String;
    protected pesel: number;
    protected telefon: number;
    protected email: String;
    protected typ_uzytkownika:String;
    
    constructor()
    {
        super();
        this.kategoria = "uzytkownik";
        this.typ_uzytkownika = "base_uzytkownik";
    }

    getId(): number {
        return this.id;
    }
    setId(id: number) {
        this.id = id;
    }
    getLogin(): String {
        return this.login;
    }
    setLogin(login: String) {
        this.login = login;
    }
    getHaslo(): String {
        return this.haslo;
    }
    setHaslo(haslo: String) {
        this.haslo = haslo;
    }
    getDataZalozenia(): Date {
        return this.data_zalozenia;
    }
    setDataZalozenia(data_zalozenia: Date) {
        this.data_zalozenia = data_zalozenia;
    }
    setImie(imie: String) {
        this.imie = imie;
    }
    getImie(): String {
        return this.imie;
    }
    setNazwisko(nazwisko: String) {
        this.nazwisko = nazwisko;
    }
    getNazwisko(): String {
        return this.nazwisko;
    }

    setPesel(pesel: number) {
        this.pesel = pesel;
    }
    getPesel(): number {
        return this.pesel;
    }
    setTelefon(telefon: number) {
        this.telefon = telefon;
    }
    getTelefon(): number {
        return this.telefon;
    }
    setEmail(email: String) {
        this.email = email;
    }
    getEmail(): String {
        return this.email;
    }
    getTypUzytkownika():String
    {
        return this.typ_uzytkownika
    }
    
}