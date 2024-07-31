/*var divUsuarios = document.querySelector('#usuarios');

var usuarios = [];

console.log(divUsuarios);

fetch('https://jsonplaceholder.typicode.com/users')
.then(data => data.json())
.then(data => {
    usuarios = data;
    console.log(usuarios);
    usuarios.map((data, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + '-' + data.name + '-' + data.address.street;
        divUsuarios.append(nombre);
    })
})
*/

var divUsuarios = document.querySelector('#usuarios');
var divGeorge = document.querySelector('#usuarioGeorge');

function getUsuarios() {
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function getUsuarioGeorge() {
    return fetch('https://reqres.in/api/users/1');
}

function listadoUsuarios(usuarios){
    usuarios.map((data, i) => {
        let nombre = document.createElement('h3');
        nombre.innerHTML = i + '-' + data.name + '-' + data.address.street;
        divUsuarios.append(nombre);
        document.querySelector('.loading').style.display = 'none';
    });
}

function mostrarUsuarioGeorge(usuario){
    let nombre = document.createElement('h3');
    nombre.innerHTML = usuario.data.first_name + ' ' + usuario.data.last_name;
    let avatar = document.createElement('img');
    avatar.src = usuario.data.avatar;

    divGeorge.append(nombre);
    divGeorge.append(avatar);
    document.querySelector('.loadingGeorge').style.display = 'none';
}

getUsuarios()
.then(data => data.json())
.then(user =>{ 
listadoUsuarios(user)
})

.then(data => {
    return getUsuarioGeorge();
})
.then (data => data.json())
.then(user => {
    mostrarUsuarioGeorge(user)})












