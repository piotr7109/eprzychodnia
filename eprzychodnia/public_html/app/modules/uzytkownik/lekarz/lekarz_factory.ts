import {Lekarz}  from 'app/modules/uzytkownik/lekarz/lekarz.ts';
import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';

export class LekarzFactory extends UzytkownikFactory
{
    public static fetchObject(row: Lekarz): Lekarz {
        let uz:Lekarz = new Lekarz();
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
        uz.setTerminy(row.terminy);
        
        return uz;
    }
}