import {BaseModule} from "app/modules/base_module.ts";

export class Skierowanie extends BaseModule
{
    protected id: number;
    protected data: Date;
    protected nazwa:String;
    protected opis:String;
    constructor()
    {
        super();
    }
    
}
export class Recepta extends Skierowanie
{
    constructor()
    {
        super();
    }
    
}