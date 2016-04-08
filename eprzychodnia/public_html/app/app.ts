import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from 'angular2/router';
import {LogowanieComponent} from '/app/components/logowanie/logowanie.component.ts';
import {Home} from '/app/components/home/home.ts';

@Component({
    selector: 'app',
    directives: [ROUTER_DIRECTIVES, Home],
    template: `<router-outlet></router-outlet>`
})

@RouteConfig([
    {path: '/', redirectTo: ['Logowanie']},
    {path : '/logowanie', name: 'Logowanie', component: LogowanieComponent},
    { path: '/home', name: 'Home', component: Home }
])

export class App{
    constructor(){
    }
    
    
}