if (typeof(Storage) !== "undefined") {
    
    console.log("Localstorage disponible");
    
}else{
    
    console.log("Localstorage no disponible");
    
}

//guardar informacion
localStorage.setItem("materia", "Web");

//recuperar
console.log(localStorage.getItem("materia"));

var datosUsuario = {
    nombre: "Juan",
    email: "juan.perez@epn.edu.ec",
    edad: 25
}
//convertir de json a string
localStorage.setItem("user", JSON.stringify(datosUsuario));

console.log(localStorage.getItem("user"));

//convertir de string a json
var user = JSON.parse(localStorage.getItem("user"));

console.log(user);