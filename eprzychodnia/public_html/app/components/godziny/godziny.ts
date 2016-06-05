
import {Component, OnInit} from 'angular2/core';
import {FORM_DIRECTIVES, FormBuilder, Validators, ControlGroup, NgIf} from 'angular2/common';
import {Router, CanActivate} from 'angular2/router';
import {Http} from 'angular2/http';
import {Zmiany} from '/app/services/zmiany/zmiany.ts';

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
    
    
    constructor(public fb: FormBuilder, public router: Router, public http: Http) 
    {
        this.zmiany = Zmiany.zmiany;
        this.dni = Zmiany.dni;
        console.log(this.dni);
        this.form = fb.group({
            pn: ['', Validators.required],
            wt: ['', Validators.required],
            sr: ['', Validators.required],
            czw: ['', Validators.required],
            pt: ['', Validators.required],
            sb: ['', Validators.required],
            ndz: ['', Validators.required],
        });
        
        
    }
    
    
    onSubmit(value: any) {
        
    }
    
}