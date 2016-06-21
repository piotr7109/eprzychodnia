import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf, FormControl, Control} from 'angular2/common';
import {Http} from 'angular2/http';

import { ValidationService, ControlMessages } from '/app/services/form/form_helpers.ts';
import {Zamowienie} from "/app/modules/zamowienie/zamowienie.ts";
import {Sprzet} from "/app/modules/zamowienie/sprzet.ts";

@Component({
    selector: "dodaj-zamowienie",
    directives: [FORM_DIRECTIVES, NgIf, ControlMessages],
    templateUrl: "app/views/zamowienia/dodaj_zamowienie.html"
})

export class DodajZamowienie implements OnInit {

    public sprzet: Array = new Array(1,0,0,0,0,0,0,0,0,0);
    public index=0;
    form: ControlGroup;
    public success:boolean = false;

    constructor(public http: Http, public fb: FormBuilder) {

        this.initForm();
    }

    dodajSprzet() {
        this.index++;
        this.sprzet[this.index] = 1;
        
    }
    usunSprzet() {
        this.sprzet[this.index] = 0;
        this.index--;
    }
    initForm()
    {
        this.form = this.fb.group({
            nazwa_0: ['', Validators.required],
            nazwa_1: ['', Validators.required],
            nazwa_2: ['', Validators.required],
            nazwa_3: ['', Validators.required],
            nazwa_4: ['', Validators.required],
            nazwa_5: ['', Validators.required],
            nazwa_6: ['', Validators.required],
            nazwa_7: ['', Validators.required],
            nazwa_8: ['', Validators.required],
            nazwa_9: ['', Validators.required],
            ilosc_0: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_1: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_2: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_3: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_4: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_5: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_6: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_7: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_8: ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            ilosc_9: ['', Validators.compose([Validators.required, ValidationService.numberValidator])]
        });
    }


    ngOnInit() {

    }

    dodajZamowienie(value: any) {
        let zamowienie = new Zamowienie();
        for(let i=0; i< this.index+1; i++)
        {
            let sprzet:Sprzet = new Sprzet();
            sprzet.nazwa = value["nazwa_"+i];
            sprzet.ilosc = value["ilosc_"+i];
            zamowienie.dodajSprzet(sprzet);
        }
        zamowienie.insert(this.http)
        .subscribe(()=>{
            this.success = true;
        });
    }


}