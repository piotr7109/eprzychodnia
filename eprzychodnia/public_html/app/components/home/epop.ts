import {Component, OnInit} from 'angular2/core';

@Component({
    selector: 'epop',
    templateUrl: "app/views/logowanie/logowanie.html"
})

export class Epop implements OnInit
{
    typ_uzytkownika:String;
    constructor()
    {
        this.typ_uzytkownika = localStorage.getItem('typ_uzytkownika');
    }
    
    ngOnInit()
    {
        
    }
    
}