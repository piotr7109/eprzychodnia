import {Component, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from '/app/components/logowanie/authentication.ts';
import {czyZalogowany}  from '/app/services/logowanie/czy-zalogowany.ts';
//import {ladujMenu}  from '/app/services/menu/laduj-menu.ts';
import {UzytkownikFactory}  from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik}  from '/app/modules/uzytkownik/uzytkownik.ts';
import {Http}  from 'angular2/http';


@Component({
    selector: 'home',
    templateUrl: "/app/views/home/home.html"
})
@CanActivate(() => czyZalogowany())
export class Home implements OnInit {
    public uzytkownik: Uzytkownik = new Uzytkownik();
    constructor(public auth: Authentication, public router: Router, public http: Http) {

        this.uzytkownik.setLogin("DEFAULT");
        this.id_uzytkownika = localStorage.getItem('token');

    }

    ngOnInit() {
        UzytkownikFactory.getUzytkownik(this.http, this.id_uzytkownika)
            .subscribe((uzytkownik: Uzytkownik) => {
                this.uzytkownik = uzytkownik;
                
            });

    }
    onLogout() {
        this.auth.logout()
            .subscribe(
            () => this.router.navigate(['../Login']),
        );
    }
}
  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['/logowanie']),
      );
  }
} 
