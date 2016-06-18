import {Lekarz}  from 'app/modules/uzytkownik/lekarz/lekarz.ts';
import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';

export class Pacjent extends Uzytkownik
{
    
    protected id_lekarza:String = "0";
    protected lekarz:Lekarz;
    
    
    public getIdLekarza():number
    {
        return this.id_lekarza;
    }
    public setIdLekarza(id_lekarza:number)
    {
        this.id_lekarza = id_lekarza;
    }
    public getLekarz():Lekarz
    {
        return this.lekarz;
    }
    public setLekarz(lekarz:Lekarz)
    {
        this.lekarz = lekarz;
    }
}