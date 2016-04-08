// home.ts
import {Component} from 'angular2/core';
import {Router, CanActivate} from 'angular2/router';
import {Authentication} from '/app/components/logowanie/authentication.ts';
import {czyZalogowany}  from '/app/services/logowanie/czy-zalogowany.ts';

@Component({
  selector: 'home',
  directives: [],
  templateUrl:"/app/views/home/home.html" 
})

@CanActivate(() => czyZalogowany())
export class Home {
  constructor(public auth: Authentication, public router: Router) {}

  onLogout() {
    this.auth.logout()
      .subscribe(
        () => this.router.navigate(['/logowanie']),
      );
  }
}
