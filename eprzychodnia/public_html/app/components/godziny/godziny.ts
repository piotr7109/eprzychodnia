
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {Zmiany} from '/app/services/zmiany/zmiany.ts';
import {UzytkownikFactory} from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik} from '/app/modules/uzytkownik/uzytkownik.ts';

@Component({
    selector: "godziny",
    templateUrl: "/app/views/godziny/godziny.html"
})

export class Godziny implements OnInit
{
    public zmiany:Array;
    private success:boolean = false;
    public form: ControlGroup;
    public dni:Array;
    public disabled = false;
    public uzytkownik:Uzytkownik = new Uzytkownik();
    public error_za_duzo_wolnych = false;
    public error_nie_wszystkie_wypelnione = false;
    
    constructor(public fb: FormBuilder, public router: Router, public http: Http) 
    {
        this.zmiany = Zmiany.zmiany;
        this.dni = Zmiany.dni;
        this.form = fb.group({
            pn: ['', null],
            wt: ['', null],
            sr: ['', null],
            czw: ['', null],
            pt: ['', null],
            sb: ['', null],
            ndz: ['', null],
        });
        
        
    }
    
    ngOnInit()
    {
        this.getUzytkownik();
        this.zablokujGrafik();
    }
    getUzytkownik()
    {
        let id_uzytkownika = localStorage.getItem('token');
        UzytkownikFactory.getUzytkownik(this.http, id_uzytkownika).
            subscribe(
            (uzytkownik:Uzytkownik) =>{
                this.uzytkownik = uzytkownik;
            });
    }
    zablokujGrafik()
    {
//        let data = new Date();
//        if(data.getDay() == 0 || data.getDay() == 6)
//        {
//            this.disabled = false;
//        }
//        else
//        {
//            this.disabled = true;
//        }
    }
    
    czyZaDuzoWolnych(value):boolean
    {
        let ile_wolnych =0;
        for (let dzien of this.dni) 
        {
            let val = value[dzien.skrot]);
            if(val == 99 || val.value == 99)
            {
                ile_wolnych++;
            }
        }
        if(ile_wolnych > 2)
        {
            this.error_za_duzo_wolnych = true;
            return true;
        }
        this.error_za_duzo_wolnych = false;
        return false;
    }
    czyWszystkieWypelnione(value):boolean
    {
        for (let dzien of this.dni) 
        {
            let val = value[dzien.skrot];
            if(val == "") 
            {
                this.error_nie_wszystkie_wypelnione = true;
                return false;
            }
        }
        this.error_nie_wszystkie_wypelnione = false;
        return true;
    }
    
    onChange(event)
    {
        this.success = false; 
        this.czyZaDuzoWolnych(this.form.controls);
    }
    
    onSubmit(value: any)
    {
        this.success = false;
        if(this.czyWszystkieWypelnione(value) &&!this.czyZaDuzoWolnych(value) )
        {
            
            this.uzytkownik.godziny = value;
            this.uzytkownik.update(this.http, this.uzytkownik)
                .subscribe(() => {
                    this.success = true; 
                    this.getUzytkownik();
                });       
        }
    }
    
}