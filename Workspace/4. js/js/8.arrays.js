var categorias = ['Lacteos', 'Carnicos', 'Embutidos', "Limpieza"];
var productos = ['Yogurt', 'Pollo', 'Salchicha', 'Jabon'];

console.log(categorias , productos);

var tienda = [categorias, productos];

console.log(tienda[1][0]);

//operaciones
//agregar
productos.push('Detergente');
console.log(productos);

//eliminar
var indice = productos.indexOf('Salchicha');
console.log(indice);
productos.splice(indice, 1);
console.log(productos);

//convertir array en cadena de string separado por comas
var producto_string = productos.join();
console.log(producto_string);

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");
console.log(cadena_array);

for (let producto in productos) {//elemento in array
    console.log(productos[producto]);
}

//busqueda
var busqueda = productos.findIndex(
    producto => producto == 'Pollo'
);

console.log(busqueda);

