import {BaseModule} from "app/modules/base_module.ts";

export class Skierowanie extends BaseModule
{
    protected id: number;
    protected data_skierowania: Date;
    protected nazwa:String;
    protected opis:String;
    constructor()
    {
        super();
    }
    
}