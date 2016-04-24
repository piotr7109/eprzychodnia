import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router';
import {Authentication} from 'app/components/logowanie/authentication.ts';

@Component({
    selector: 'logowanie_pacjenta',
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: '/app/views/logowanie/logowanie_pacjenta.html'
})

export class LogowaniePacjenta {
    form: ControlGroup;
    error: boolean = false;
    constructor(fb: FormBuilder, public auth: Authentication, public router: Router) {
        this.form = fb.group({
            login: ['', Validators.required],
            haslo: ['', Validators.required]
        });
    }

    onSubmit(value: any) {
        this.auth.login(value.login, value.haslo)

            .subscribe(
            (uzytkownik: Uzytkownik) => {
                localStorage.setItem('token', uzytkownik.getId());
                localStorage.setItem('typ_uzytkownika', uzytkownik.getTypUzytkownika());
                this.router.navigate(['../Home']);
            },
            () => { this.error = true; console.log("BLAD") }

            );
    }
    navigate(location)
    {
         this.router.navigate(location);
    }
}

