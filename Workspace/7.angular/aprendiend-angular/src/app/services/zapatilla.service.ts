import { Injectable } from "@angular/core";
import { Zapatilla } from "../models/zapatilla";

@Injectable()

export class ZapatillaServices{
    public zapatillas: Array<Zapatilla>;
    constructor(){
        this.zapatillas = [
        new Zapatilla('Adidas', 'blanco', 80, true),
        new Zapatilla('Puma', 'blanco', 80, true),
        new Zapatilla('Nike', 'blanco', 80, true),
        new Zapatilla('Adidas', 'blanco', 80, false),
    ];
    }
    getZapatillas(): Array<Zapatilla>{
        return this.zapatillas;
    }
}