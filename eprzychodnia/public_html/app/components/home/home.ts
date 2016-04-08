// home.ts
import {Component, NgZone, OnInit} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from '/app/components/logowanie/authentication.ts';
import {czyZalogowany}  from '/app/services/logowanie/czy-zalogowany.ts';
import {UzytkownikFactory}  from '/app/modules/uzytkownik/uzytkownik_factory.ts';
import {Uzytkownik}  from '/app/modules/uzytkownik/uzytkownik.ts';
import {BaseComponent} from 'app/components/base_component.ts';
import {Http} from 'angular2/http';
@Component({
  selector: 'home',
  directives: [],
  templateUrl:"/app/views/home/home.html" 
})

@CanActivate(() => czyZalogowany())
export class Home extends BaseComponent {
  public uzytkownik:Uzytkownik = new Uzytkownik();
  
  constructor(public auth: Authentication, public router: Router, private _ngZone: NgZone, private http:Http) 
  {
      super(_ngZone);
      this.uzytkownik.setLogin("DEFAULT");
      var id_uzytkownika: number = localStorage.getItem('token');
      this.uzytkownik = UzytkownikFactory.getUzytkownik(id_uzytkownika)
      .then(
          (uzytkownik:Uzytkownik) => {this.uzytkownik = uzytkownik}
      );

      
  }
  updatePage() {
    alert("aa");
  }


  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['/logowanie'])
      );
  }
}