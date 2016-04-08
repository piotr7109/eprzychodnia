import {NgZone} from 'angular2/core';

export class BaseComponent {
    constructor(private _ngZone: NgZone) {

    }
    
    
    
    public updatePage() {
        this._ngZone.runOutsideAngular(() => {
            // reenter the Angular zone and display done
            this._ngZone.run(() => { });

        });
    }
}