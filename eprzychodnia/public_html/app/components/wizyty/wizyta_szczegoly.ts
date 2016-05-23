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
    
    protected wizyta:Wizyta = new Wizyta();
    protected skierowania:Skierowanie[];
    protected recepty:Skierowanie[];
    
    constructor(public _router: Router, private _routeParams: RouteParams, public http:Http)
    {
        
    }
    
    ngOnInit()
    {
        let id:number = this._routeParams.get('id');
        WizytaFactory.getWizyta(this.http, id )
       .subscribe((wizyta:Wizyta) =>{
           this.wizyta = wizyta;
           this.skierowania = wizyta.skierowania;
           this.recepty = wizyta.recepty;

       });
    }
    
}