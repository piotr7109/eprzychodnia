// home.ts
import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from '/app/components/logowanie/authentication.ts';
import {czyZalogowany}  from '/app/services/logowanie/czy-zalogowany.ts';
import {UzytkownikFactory}  from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik}  from '/app/modules/uzytkownik/uzytkownik.ts';
import {Http}  from 'angular2/http';
//import {BaseComponent} from 'app/components/base_component.ts';
@Component({
    selector: 'home',
    templateUrl: "/app/views/home/home.html"
})

@CanActivate(() => czyZalogowany())
export class Home implements OnInit {
    public uzytkownik: Uzytkownik = new Uzytkownik();
    public id_uzytkownika: number;
    constructor(public auth: Authentication, public router: Router, public http: Http) {

        this.uzytkownik.setLogin("DEFAULT");
        this.id_uzytkownika = localStorage.getItem('token');

        UzytkownikFactory.getUzytkownik(http, this.id_uzytkownika)
            .subscribe((uzytkownik: Uzytkownik) => {
                this.uzytkownik = uzytkownik;
            });


    }

    ngOnInit() {
        alert("init");

    }
    onLogout() {
        this.auth.logout()
            .subscribe(
            () => this.router.navigate(['../Login']),
        );
    }
}