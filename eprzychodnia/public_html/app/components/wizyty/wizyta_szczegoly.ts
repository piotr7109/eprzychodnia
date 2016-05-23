import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate,RouteParams} from 'angular2/router';
import {Http} from 'angular2/http';
import {Wizyta} from 'app/modules/wizyta/wizyta.ts';
import {WizytaFactory} from '/app/modules/wizyta/wizyta_factory.ts';

@Component({
    selector: "wizyta-szczegoly",
    templateUrl: "/app/views/wizyty/wizyta_szczegoly.html"
})

export class WizytaSzczegoly implements OnInit{
    
    protected wizyta:Wizyta;
    protected skierowania:Skierowanie;
    protected recepty:Skierowanie;
    
    constuctor(http: Http)
    {
        
    }
    
    ngOnInit()
    {
        let id:number = this._routeParams.get('id');
        WizytaFactory.getWizyta(this.http, id )
       .subscribe((wizyta:Wizyta) =>{
           console.log(wizyta);
           this.wizyta = wizyta;
       });
    }
    
}