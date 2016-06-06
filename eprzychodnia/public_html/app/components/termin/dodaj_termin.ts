import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Http} from 'angular2/http';

import {Zmiany} from '/app/services/zmiany/zmiany.ts';
import {LekarzLista}  from 'app/modules/uzytkownik/lekarz/lekarz_lista.ts';
import {UzytkownikFactory}  from 'app/modules/uzytkownik/uzytkownik_factory.ts';
import {Termin} from 'app/modules/termin/termin.ts';


@Component({
    selector: "dodaj-termin",
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: "app/views/terminy/dodaj_termin.html"
})

export class DodajTermin implements OnInit {
    
   
    lekarze:Lekarz[];
    form: ControlGroup;
    success:boolean = false;
    selected_lekarz:Lekarz;
    godziny:Array;
    error_termin_zajety:boolean = false;
    error_nie_wybrano_godziny = true;
    
    
    
    constructor(public http: Http, fb: FormBuilder) 
    {
        this.form = fb.group({
            data: ['', Validators.required],
            godzina: ['', Validators.required],
            
        });

    }
    
    ngOnInit() {
        this.getLekarze();
    }
    getLekarze()
    {
        LekarzLista.getLekarzeLista(this.http)
        .subscribe(
        (lekarze:Lekarz[]) => {
            this.lekarze = lekarze;
            this.selected_lekarz = lekarze[0];
           
        });
    }
    onChange(lekarz) {
        this.selected_lekarz = lekarz;
    }
    dataOnChange(value:Date)
    {
        this.error_nie_wybrano_godziny = true;
        let date = new Date(value);
        let dzien_tygodnia = date.getDay();
        if(dzien_tygodnia==0)
        {
            dzien_tygodnia = 7;
        }
        let zmiana = this.selected_lekarz.godziny[Zmiany.dni[dzien_tygodnia-1].skrot];
        this.godziny = new Array();
        if(zmiana == 99)
        {
            //this.godziny.push("Lekarz ma wolne");
        }
        else
        {
            for(let i = Zmiany.zmiany[zmiana-1].start; i<= Zmiany.zmiany[zmiana-1].koniec; i++)
            {
                let czy_wolne = this.sprawdzCzyWolne(date, i);
                
                if(czy_wolne)
                {
                    this.godziny.push(i);
                }
                
            }
        }
        if(this.godziny.length == 0)
        {
            this.error_termin_zajety = true;
        }
        else
        {
            this.error_termin_zajety = false;
        }
    }
    sprawdzCzyWolne(_data, _godzina)
    {
        for(let termin of this.selected_lekarz.terminy )
        {
            let data = new Date(termin.data);
            if(data.getTime() == _data.getTime() && termin.godzina == _godzina)
            {
                return false;
            }

        }
        return true;
    }
    godzinaOnChange(value)
    {
        this.error_nie_wybrano_godziny = false;
    }
    onSubmit(values: any) 
    {
        let termin:Termin = new Termin();
        termin.setData(values.data);
        termin.setGodzina(values.godzina);
        termin.setIdPacjenta(localStorage.getItem('token'));
        this.selected_lekarz.addTermin(termin);
        this.selected_lekarz.update(this.http, this.selected_lekarz)
        .subscribe((success: boolean) => 
        {
            this.success = success;
            this.getLekarze();
        } );
        
    }

    
}