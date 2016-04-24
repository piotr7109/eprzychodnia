import {Headers} from 'angular2/http';

export class Database {
    
    /*static db = new PouchDB('http://localhost:5984/eprzychodnia', {

            auth: {
                username: 'dpawlik',
                password: 'Admin123$'
            }
        });*/
    static db:String = "https://couchdb.cloudno.de/eprzychodnia/";
    
    static getHeaders()
    {
        let headers = new Headers();
        headers.append('Authorization', 'Basic ' + btoa('osemka59:Q8ecthNnGx'));
        
        return headers;
    }
    

}
