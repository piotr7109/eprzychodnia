
export class Database {
    
    static db = new PouchDB('http://localhost:5984/eprzychodnia', {

            auth: {
                username: 'pfic',
                password: 'piotr7109'
            }
        });;
    

}