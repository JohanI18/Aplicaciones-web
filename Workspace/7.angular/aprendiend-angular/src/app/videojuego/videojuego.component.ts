import { Component } from "@angular/core";

@Component({
    selector: 'videojuego',
    /*
    template:'<h1>Componente video juegos</h1>' 
    */
   templateUrl: './videojuego.component.html'
})  

export class VideojuegoComponent{
    public titulo = 'Componente videojuego';
}

