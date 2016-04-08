import {Uzytkownik} from "/app/modules/uzytkownik/uzytkownik.ts";
import {Database} from "/app/components/config/database.ts"

export class UzytkownikFactory
{
    
    static fetchObject(row:any):Uzytkownik
    {
        var uz = new Uzytkownik();
        uz.setId(row.id);
        uz.setLogin(row.login);
        uz.setHaslo(row.haslo);
        
        return uz;
    }
    static getUzytkownik(id:number)
    {
        var db = Database.db;
        
        return db.get(id).then(function (doc) {
            return UzytkownikFactory.fetchObject(doc);
          }).catch(function (err) {
            console.log(err);
          });
    }
    
    static getIdUzytkownikaByLoginAndHaslo(uzytkownik:Uzytkownik):number
    {
        var db = Database.db;
        return db.query(function(doc) {
            if(doc.login && doc.haslo)
              emit([doc.login, doc.haslo], doc._id)
        }, {key: [uzytkownik.login, uzytkownik.haslo]})
        .then(function(result) 
            {
                if (result.rows.length > 0) {
                    return result.rows[0].id;
                }
                else {
                    return null;
                }
                
            });
        
    }
}
