window.addEventListener('load', () => {

var boton = document.querySelector('#boton');
var boton2 = document.querySelector('#boton2');
console.log(boton);

function cambiarColor() {
    var bg = boton.style.background;
    if (bg == "red") {
        boton.style.background = "blue";
        boton.style.padding = "10px";
    } else {
        boton.style.background = "red";
        boton.style.padding = "15px";
    }
}

//evento Click

boton2.addEventListener('click', function () {
    this.style.border = "10px solid black";
});

//evento Mouseover

boton2.addEventListener('mouseover', function () {
    this.style.background = "green";
});

//evento Mouseout

boton2.addEventListener('mouseout', function () {
    this.style.background = "orange";
});


var input = document.querySelector('#nombre');

//evento Focus

input.addEventListener('focus', function () {
    console.log("Estas dentro del input");
});

//evento Blur

input.addEventListener('blur', function () {    
    console.log("Estas fuera del input");
});

//evento Keypress
input.addEventListener('keypress', function () {
    console.log("Estoy presionando la tecla: ", String.fromCharCode(event.keyCode));
});

//evento Keydown
input.addEventListener('keydown', function () {
    console.log("Estoy pulsando la tecla: ", String.fromCharCode(event.keyCode));
});

//evento Keyup
input.addEventListener('keyup', function () {
    console.log("He soltado la tecla: ", String.fromCharCode(event.keyCode));
});

});