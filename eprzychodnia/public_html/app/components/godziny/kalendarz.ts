
import {Component, OnInit} from 'angular2/core';

@Component({
    selector: "kalendarz";
    templateUrl: "/app/views/godziny/kalendarz.html";
})

export class Kalendarz implements OnInit
{
    
    ngOnInit() {
        show_doctors_calendar();

    }
}