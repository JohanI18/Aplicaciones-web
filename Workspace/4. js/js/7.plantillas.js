var nombre = prompt("Ingrese un nombre");
var edad = prompt("Ingrese una edad");
var cadena = "<h1> El nombre es</h1>" + nombre + 
"<h2>La edad es</h2>" + edad;
document.write(cadena);

var cadena2 = `
<h1> El nombre es</h1> ${nombre}
<h2>La edad es</h2> ${edad}`
;

document.write(cadena2);

