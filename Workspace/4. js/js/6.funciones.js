function mensaje(){
    console.log("Texto 1");
    alert("Texto 2");
    return "OK";
}

var mens = mensaje();
console.log(mens);

function suma(num1, num2){
    console.log("Suma: " + (+num1 + num2));
}

suma(2, 3);

function listadoFrutas(fruta1, fruta2, ...restoFrutas){
    console.log("Fruta 1: " + fruta1);
    console.log("Fruta 2: " + fruta2);
    console.log("Resto de frutas " + restoFrutas);
}

listadoFrutas("Manzana", "Pera", "Uva", "Banano", "Mango");

var frutas2 = ["Manzana", "Pera"];
listadoFrutas(...frutas2, "Uva", "Banano", "Mango");

//Funciones anonimas, flecha, fat arrow

function pelicula(nombre){
    console.log("La pelicula es: " + nombre);
}

pelicula ("El señor de los anillos");

var peli = (nombre)=>{
    console.log("La pelicula es: " + nombre);
}

console.log(peli("X-MEN"));

function cuadrado(num){
    console.log("Cuadrado: " + (num*num));
}

cuadrado(5);

var potencia = (num) => {
    console.log("Potencia: " + (num*num));
}

console.log(potencia(3));

//funciones predefinidas
var numero = 6;
var texto = "Soy un texto";
var cadena = "Desarrollo web";
console.log(String(numero));
console.log(texto.toUpperCase());
console.log(cadena.toLowerCase());

var apellido = "Illicachi";
console.log(apellido.length);

var textoCadena = texto.concat(" ", cadena);
console.log(textoCadena);

var busqueda = cadena.indexOf("web");
console.log(busqueda);

//contar desde 0 como en vectores
var busqueda=texto1.indexOf("clase");
var busqueda=texto1.lastIndexOf("clase");//ultima aparicion
var busqueda=texto1.search("clase");//igual que indexOf sino existe devuelve -1
var busqueda=texto1.search("texto");
var busqueda=texto1.match(/clase/g);//devuelve una coleccion de los resultados que encuentre
var busqueda=texto1.substr(4,7);//saca desde el caracter 4 hasta el 7
var busqueda=texto1.charAt(5);//sacar una letra de una cadena
var busqueda=texto1.startsWith("clase");//true o false busca al inicio del string
var busqueda=texto1.endsWith("clase");//al final del string
var busqueda=texto1.includes("clase");//buscar en un string en una palabra
var busqueda=texto1.replace("clase", "aula");//cambiar un texto por otro
var busqueda=texto1.slice(3);//separar un string a partir de un caracter
var busqueda=texto1.slice(3,6);//separar un string a partir de un caracter
var busqueda=texto1.split(" ");//separar un string a partir de un caracter en este caso por los espacios y los hace un array
var busqueda=texto1.trim();//quitar los espacios por delante y detras