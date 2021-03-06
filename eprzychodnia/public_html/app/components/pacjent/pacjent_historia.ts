import {Component, OoInit} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Http} from 'angular2/http';

import {Uzytkownik} from 'app/modules/uzytkownik/uzytkownik.ts';
import {UzytkownikFactory} from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaLista} from 'app/modules/wizyta/wizyta_lista.ts'

@Component({
    selector: "pacjent-historia",
    templateUrl: "app/views/pacjent/pacjent_historia.html";
})

export class PacjentHistoria implements OnInit
{
    pacjent:Uzytkownik = new Uzytkownik();
    wizyty:Wizyta[];
    constructor(public _router: Router, private _routeParams: RouteParams, public http:Http)
    {
        
    }
    
    ngOnInit()
    {
        let id:String = this._routeParams.get('id');
        if(id == "" || id == "null" || id == null)
        {
            id = localStorage.getItem("token");
        }
        UzytkownikFactory.getUzytkownik(this.http, id)
            .subscribe((pacjent:Uzytkownik) =>
            { 
                this.pacjent = pacjent; 
                WizytaLista.getWizytyPacjenta(this.http, pacjent._id)
                .subscribe((wizyty:any) => {
                this.wizyty = wizyty
                });
            });
    }
    navigateDodajSkierowanie(wizyta)
    {
        this._router.navigate(['DodajSkierowanie',  { id: wizyta.id }]);
    }
    navigateDodajRecepte(wizyta)
    {
        this._router.navigate(['DodajRecepte',  { id: wizyta.id }]);
    }
    navigateToSzczegoly(wizyta:Wizyta)
    {
        this._router.navigate(['WizytaSzczegoly', {id: wizyta.id}]);
    }
    
}