interface AutoBase{
    setMarca(marca);
    //setModelo(modelo);
}
class Auto implements AutoBase{
    public marca:string;
    public modelo:string;
    public año:number;

    constructor(marca, modelo, año){
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }

    public setMarca(marca:string){
        return this.marca = marca;
    }

    public getMarca(){
        return this.marca;
    }

}
/*var auto = new Auto();
auto.marca = "Mazda";
auto.modelo = "CX-5"
auto.año = 2019;
console.log(auto);*/

var auto = new Auto("Ford", "Escape", 2023);

class Deportivo extends Auto{
    public cilindraje:number;
    public setCilindraje(cilindraje){
        this.cilindraje=cilindraje;
    }
}

var auto2 = new Deportivo("Ferrari", "Spider", 2023);
auto2.setCilindraje(3500);
console.log(auto2);



    