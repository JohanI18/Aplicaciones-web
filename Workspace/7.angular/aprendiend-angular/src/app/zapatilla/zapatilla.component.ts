import { Component } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";
import { ZapatillaServices } from "../services/zapatilla.service";

@Component({
    selector: 'zapatilla',
   templateUrl: './zapatilla.component.html',
   providers: [ZapatillaServices]
})  

export class zaptillaComponent{
    public titulo:string = 'Componente zapatilla';
    public zapatilla:Array<Zapatilla>;

    constructor(private _zapatillaService: ZapatillaServices){
        
        //this.zapatilla = ["Addidas", "blanco", "80"]
        /*this.zapatilla = [
            new Zapatilla('Adidas', 'blanco', 80, true),
            new Zapatilla('Puma', 'blanco', 80, true),
            new Zapatilla('Nike', 'blanco', 80, true),
            new Zapatilla('Adidas', 'blanco', 80, false),
        ];*/
        this.zapatilla = [];

    }
    ngOnInit(){
        this.zapatilla = this._zapatillaService.getZapatillas();
    }
    ngDoCheck(){}
    ngOnDestroy(){}
}




