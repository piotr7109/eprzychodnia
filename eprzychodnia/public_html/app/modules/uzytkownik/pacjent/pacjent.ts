import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';

export class Pacjent extends Uzytkownik
{
    protected lekarz:Uzytkownik;
    
    getLekarz():Uzytkownik
    {
        return this.lekarz;
    }
}