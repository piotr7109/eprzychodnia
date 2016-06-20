import {BaseModule} from "app/modules/base_module.ts";
import {Database} from "app/components/config/database.ts";
import {Http, Headers} from 'angular2/http';
import {Sprzet} from 'app/components/zamowienie/sprzet.ts'

export class Zamowienie extends BaseModule
{
    public sprzet:Sprzet[];
    
    constructor(private http: Http)
    {
        this.sprzet = new Array();
        this.kategoria = "zamowienie";
    }
    public insert(http:Http) 
    {
        let db = Database.db;
        let headers = Database.getHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.post(db, JSON.stringify(this), {
            headers: headers
        })
        .map(res => res.json()).subscribe();
    }
    public dodajSprzet(sprzet:Sprzet)
    {
        this.sprzet.push(sprzet);
    }
}


