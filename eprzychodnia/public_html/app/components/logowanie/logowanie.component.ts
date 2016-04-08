import {Component} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router} from 'angular2/router';
import {Authentication} from 'app/components/logowanie/authentication.ts';

@Component({
    selector: 'logowanie',
    directives: [FORM_DIRECTIVES, NgIf],
    templateUrl: '/app/views/logowanie/logowanie.html'
})

export class LogowanieComponent {
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
            .then(function(uzytkownik) {
                if (uzytkownik == null) {
                    this.error = true;

                }
                return this.error;
            })
            .then(function(czy_error:boolean) {
                if (czy_error) 
                {
                    $("#logowanie_alert").css("display","block");
                }
                else
                {
                    $("#logowanie_alert").css("display","none");
                }
            })
            .then(
                (token: any) => { this.router.navigate(['/Home']); }

            )
            .catch(function(err) {
                this.error = true;
            });
    }
}
