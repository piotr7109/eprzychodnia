import {Component, OnInit} from 'angular2/core';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Http} from 'angular2/http';
import {NgIf} from 'angular2/common';

import {PacjentLista} from 'app/modules/uzytkownik/pacjent/pacjent_lista.ts';
import {LekarzFactory} from 'app/modules/uzytkownik/lekarz/lekarz_factory.ts';
import {Lekarz} from 'app/modules/uzytkownik/lekarz/lekarz.ts';

import {PacjenciLista} from 'app/components/pacjent/pacjenci_lista.ts';

@Component({
    selector: "pacjenci-lista",
    templateUrl: "app/views/pacjent/pacjenci_lekarza.html"
})

export class PacjenciLekarza extends PacjenciLista implements OnInit {
    public pacjenci: Pacjent[];
    public lekarz:Lekarz;

    constructor(public http: Http, public router:Router) {
        
    }
    ngOnInit() {
        PacjentLista.getPacjenciLekarzaLista(this.http, localStorage.getItem('token'))
        .subscribe(
        (pacjenci:any) => {
            this.pacjenci = pacjenci;  
            for(let i=0; i< pacjenci.length; i++ ) 
               this.getLekarz(pacjenci[i].getIdLekarza(),i);   
            this.loadLekarz();
           
        });
    }
    loadLekarz()
    {
        LekarzFactory.getUzytkownik(this.http, localStorage.getItem('token'))
        .subscribe((uz:Lekarz) => {
            this.lekarz = uz;
            this.sprawdzTerminy();
        });

    }
    sprawdzTerminy()
    {
        let data = new Date();
        let l_data;
        let pacjenci = this.pacjenci;
        this.pacjenci = [];
        for(let item of pacjenci)
        {
            for(let termin of this.lekarz.terminy)
            {
                l_data = new Date(termin.data);
                if(this.porownajDaty(l_data, data) && item._id == termin.id_pacjenta)
                {
                    this.pacjenci.push(item);
                    break;
                }
            }
            
        }  
    }
    porownajDaty(a,b)
    { 
        if(a.getDate() == b.getDate() && a.getMonth() == b.getMonth() && a.getFullYear() == b.getFullYear() )
        {
            return true;
        }
        return false;
    }
    dodajWizyte(pacjent)
    {
        this.router.navigate(['DodajWizyte',  { id: pacjent._id }]);
    }
    
    
}