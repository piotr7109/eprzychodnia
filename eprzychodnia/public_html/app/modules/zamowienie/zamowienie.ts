import {BaseModule} from "app/modules/base_module.ts";
import {Database} from "app/components/config/database.ts";
import {Http, Headers} from 'angular2/http';
import {Sprzet} from 'app/components/zamowienie/sprzet.ts'

export class Zamowienie extends BaseModule
{
    public sprzet:Sprzet[];
    public aktywny:String;
    
    constructor(private http: Http)
    {
        this.sprzet = new Array();
        this.kategoria = "zamowienie";
        this.aktywny = "T";
    }
    public insert(http:Http) 
    {
        let db = Database.db;
        let headers = Database.getHeaders();
        this.aktywny = "T";
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.post(db, JSON.stringify(this), {
            headers: headers
        })
        .map(res => res.json());
    }
    public update(http:Http)
    {
        let db = Database.db;
        let headers = Database.getHeaders();
        headers.append('Accept', 'application/json');
        headers.append('Content-Type', 'application/json');
        return http.put(db+"/"+this._id, JSON.stringify(this), {
            headers: headers
        })
        .map(res => return res.json());
    }
    public dodajSprzet(sprzet:Sprzet)
    {
        this.sprzet.push(sprzet);
    }
}


