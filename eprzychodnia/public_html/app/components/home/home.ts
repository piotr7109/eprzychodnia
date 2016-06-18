import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from 'app/components/logowanie/authentication.ts';
import {czyZalogowany}  from 'app/services/logowanie/czy-zalogowany.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {Http}  from 'angular2/http';
import { ValidationService, ControlMessages } from '/app/services/form/form_helpers.ts';
 


@Component({
    selector: 'home',
    directives: [FORM_DIRECTIVES, NgIf,ControlMessages],
    templateUrl: "app/views/home/home.html"
})
@CanActivate(() => czyZalogowany())
export class Home implements OnInit {
    
    public uzytkownik: Uzytkownik = new Uzytkownik();
    private success:boolean = false;
    form: ControlGroup;
    
    constructor(public fb: FormBuilder, public auth: Authentication, public router: Router, public http: Http) {
        
        this.id_uzytkownika = localStorage.getItem('token');
        this.form = this.fb.group({
            'login': ['', Validators.required],
            'haslo': ['', Validators.required],
            'imie': ['', Validators.required],
            'nazwisko': ['', Validators.required],
            'pesel': ['', Validators.compose([Validators.required, ValidationService.peselValidator])],
            'telefon': ['', Validators.compose([Validators.required, ValidationService.numberValidator])],
            'email' : ['123', Validators.compose([Validators.required, ValidationService.emailValidator])]
         });

    }

    ngOnInit() {
        this.getUzytkownik();
        
        ukrywanie_przyciskow_w_home();
        podmiana_przycisków_w_home();

    }
    getUzytkownik()
    {
        UzytkownikFactory.getUzytkownik(this.http, this.id_uzytkownika)
            .subscribe((uzytkownik: Uzytkownik) => {
                this.uzytkownik = uzytkownik;
                this.updateForm(uzytkownik);
                

            });
    }
    updateForm(uzytkownik:Uzytkownik)
    {
        this.form.controls['login'].updateValue(uzytkownik.login);
        this.form.controls['haslo'].updateValue(uzytkownik.haslo);
        this.form.controls['imie'].updateValue(uzytkownik.imie);
        this.form.controls['nazwisko'].updateValue(uzytkownik.nazwisko);
        this.form.controls['pesel'].updateValue(uzytkownik.pesel);
        this.form.controls['telefon'].updateValue(uzytkownik.telefon);
        this.form.controls['email'].updateValue(uzytkownik.email);


    }
    
    zapiszDane(val:Uzytkownik)
    {
        this.uzytkownik.setLogin(val.login);
        this.uzytkownik.setImie(val.imie);
        this.uzytkownik.setNazwisko(val.nazwisko);
        this.uzytkownik.setPesel(val.pesel);
        this.uzytkownik.setTelefon(val.telefon);
        this.uzytkownik.setEmail(val.email);
        
        this.uzytkownik.update(this.http, this.uzytkownik)
        .subscribe((uz:any) =>{
            this.success = true;
            this.id_uzytkownika = uz.id; 
            this.getUzytkownik()
        });
    }
}