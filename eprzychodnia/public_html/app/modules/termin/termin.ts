export class Termin
{
    protected godzina:number;
    protected data:Date;
    protected id_pacjenta;
    
    getGodzina():number
    {
        return this.godzina;
    }
    setGodzina(godzina:number)
    {
        this.godzina = godzina;
    }
    getData():Date
    {
        return this.data;
    }
    setData(data:Date)
    {
        this.data = data;
    }
    getIdPacjenta():number
    {
        return this.id_pacjenta;
    }
    setIdPacjenta(id_pacjenta:number)
    {
        this.id_pacjenta = id_pacjenta;
    }
}