
import {Uzytkownik} from '/app/modules/uzytkownik/uzytkownik.ts';

export class Lekarz extends Uzytkownik
{
    constructor()
    {
        super();
        this.typ_uzytkownika = "lekarz";
    }
}