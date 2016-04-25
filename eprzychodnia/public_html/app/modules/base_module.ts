export class BaseModule
{
    protected kategoria = "base_module";
    protected _rev:String;
    getKategoria():String
    {
        return this.kategoria;
    }
    getRev():String
    {
        return this._rev;
    }
    setRev(rev:String)
    {
        this._rev =rev;
    }
}