import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';
import {Termin} from '/app/modules/termin/termin.ts';

export class Lekarz extends Uzytkownik
{
    terminy:Termin[] = new Array();
    
    getTerminy():Termin[]
    {
        return this.terminy;
    }
    setTerminy(terminy:Termin[])
    {
        this.terminy = terminy;
    }
    addTermin(termin:Termin)
    {
        if(this.terminy == null)
        {
            this.terminy = new Array(); 
        }
        this.terminy.push(termin);
    }
}
