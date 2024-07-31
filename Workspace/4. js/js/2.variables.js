'use strict'; //deprecated
/*
asi se hace un comentario de varias lineas
*/
var ciudad = 'Quito';
console.log(ciudad);

var pais = 'Ecuador';
var ciudadPais = ciudad + ', ' + pais;
console.log(ciudadPais);

var anio = 2024;
console.log(anio);

var numero1 = "5";
var numero2 = 6;
console.log(+numero1 + numero2);

console.log(typeof ciudad);
console.log(typeof anio);

var verdadero_falso = true;
console.log(typeof verdadero_falso);

let nombre = 'Johan';
console.log(nombre);

/* var se puede reasignar y let no se puede reasignar */
/* var se usa en variables globales y let en variables locales */

var num_1 = 6;
console.log(num_1);
if (true) {
    //var num_1 = 4;
    let num_1 = 4;  
    console.log(num_1);
}
console.log(num_1);

const pi = 3.14151692;
//pi = 3.1416;
console.log(pi);

//Nan = Not a Number

