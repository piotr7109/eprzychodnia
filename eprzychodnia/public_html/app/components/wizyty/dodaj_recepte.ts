import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate,RouteParams} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {Recepta} from '/app/modules/wizyta/skierowanie/skierowanie.ts';
import {DodajSkierowanie} from '/app/components/wizyty/dodaj_skierowanie.ts';


@Component({
    selector: "dodaj-recepte",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/wizyty/dodaj_recepte.html"
})

export class DodajRecepte extends DodajSkierowanie implements OnInit {
    
    constructor(public http: Http, fb: FormBuilder,private _routeParams: RouteParams,) 
    {
        super(http,fb,_routeParams);

    }
    
    onSubmit(values: any) 
    {
        let item:Recepta = new Recepta();
        item.data = values.data;
        item.nazwa = values.nazwa;
        item.opis = values.opis;
        this.wizyta.addRecepta(item);
        this.wizyta.update(this.http)
        .subscribe((w:Wizyta)=>{
            console.log(w);
        });
    }

    
}
