/* 
Operadores relacionales 
< > <= >= == != === !==
*/

var anio = 2023;

if (anio > 2020) {
    console.log("Superamos la pandemia");
} else {
    console.log("Auno no superamos la pandemia");
}

/*
Operadores logicos
&& (and)
|| (or)
! (not)
*/

if (anio >= 2022 && anio <= 2024) {
    console.log("Superamos la pandemia");
}

//switch

var edad = 12;

switch (edad) {
    case 12:
        console.log("Eres menor de edad");
        break;
    case 20:
        console.log("Eres adulto");
        break;
    case 50:
        console.log("Eres adulto mayor");
        break;
    default:
        console.log("Edad no especificada");
        break;
}