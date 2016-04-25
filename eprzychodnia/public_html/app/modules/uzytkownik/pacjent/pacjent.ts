import {Uzytkownik}  from 'app/modules/uzytkownik/uzytkownik.ts';

export class Pacjent extends Uzytkownik
{
    
    protected id_lekarza:String = "0";
    protected lekarz:Uzytkownik = new Uzytkownik();
    
    
    public getIdLekarza():number
    {
        return this.id_lekarza;
    }
    public setIdLekarza(id_lekarza:number)
    {
        this.id_lekarza = id_lekarza;
    }
    public getLekarz():Uzytkownik
    {
        return this.lekarz;
    }
    public setLekarz(lekarz:Uzytkownik)
    {
        this.lekarz = lekarz;
    }
}