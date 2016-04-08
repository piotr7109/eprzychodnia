import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";
import {Database} from "/app/components/config/database.ts"

export class UzytkownikFactory
{
    
    static fetchObject(row:any):Uzytkownik
    {
        var uz = new Uzytkownik();
        uz.setId(row.id);
        uz.setLogin(row.key[0]);
        uz.setHaslo(row.key[1]);
        
        return uz;
    }
    
    static getIdUzytkownikaByLoginAndHaslo(uzytkownik:Uzytkownik):number
    {
        var db = Database.db;
        return db.query(function(doc) {
            if(doc.login && doc.haslo)
              emit([doc.login, doc.haslo], doc._id)
        }, {key: [uzytkownik.login, uzytkownik.haslo]});
        
    }
}
