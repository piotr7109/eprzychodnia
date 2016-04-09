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
  templateUrl:"/app/views/home/home.html" 
})

@CanActivate(() => czyZalogowany())
export class Home implements OnInit {
  public uzytkownik:Uzytkownik = new Uzytkownik();
  public id_uzytkownika:number = 110;
  constructor(public auth: Authentication, public router: Router, public http:Http) 
  {
      this.uzytkownik.setLogin("DEFAULT");
      //this.ngOnInit();

      
  }

  ngOnInit()
  {
      alert("init");
      var id_uzytkownika: number = localStorage.getItem('token');
      this.http.get('http://localhost:5984/eprzychodnia/_design/users/_view/getUser?key=["lekarz","arr2"]')
        .subscribe((data) => {
            this.id_uzytkownika = 10;
      });
      
      /*this.uzytkownik = UzytkownikFactory.getUzytkownik(id_uzytkownika)
      .then(
          (uzytkownik:Uzytkownik) => {this.uzytkownik = uzytkownik}
          
      )
      .then
      (
        () => { this.router.navigate(['/Home']); }
      );*/
      
  }
  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['../Login']),
      );
  }
}