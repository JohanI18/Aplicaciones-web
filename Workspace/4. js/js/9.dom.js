/*
encontrar un elemento por su id
var caja = document.getElementById("caja");
console.log(caja);*/
var caja = document.querySelector("#caja");

caja.style.background = "green";
caja.style.padding = "20px";
caja.style.color = "white";
caja.innerHTML = "Nuevo texto";
caja.className = "otraClase";

/*encontrar elementos por su etiqueta */

var todosLosDivs = document.getElementsByTagName('div');
console.log(todosLosDivs);
var contenidoNuevo = todosLosDivs[3];
contenidoNuevo.innerHTML = "Texto nuevo";
contenidoNuevo.style.background = "blue";
contenidoNuevo.style.color = "white";

var seccion = document.querySelector("#miSeccion");
var valor;
for (valor in todosLosDivs) {
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.append(texto);
        seccion.append(parrafo);
    }
}

var hr = document.createElement("hr");
seccion.append(hr);

//encontrar elementos por su clase

var divRojos = document.getElementsByClassName('rojo');
var divAmarillos = document.getElementsByClassName('amarillo');

console.log(divRojos);

divAmarillos[0].style.background = "yellow";

var div;
for (div in divRojos) {
    if (divRojos[div].className == 'rojo') {
        divRojos[div].style.background = "red";
    }
}

var id = document.querySelector("#encabezado");
var claseRojo = document.querySelector(".rojo");
var etiqueta = document.querySelector("div");

console.log(id, claseRojo, etiqueta);