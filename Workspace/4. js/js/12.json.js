window.addEventListener('load', () => {

    var pelicula = {
        titulo: "Intensamente",
        year: 2015,
        pais: "Estados Unidos",
        idiomas:["Ingles", "Español", "Chino"]
    }

    console.log(pelicula.titulo);
    console.log(pelicula.idiomas[2]);

    pelicula.year = 2016;

    console.log(pelicula.year);

    var peliculas = [
        {titulo: "Intensamente", year: 2016, pais: "Francia"},
        {titulo: "Titanic", year: 2016, pais: "Francia"},
        {titulo: "X-Men", year: 2016, pais: "Francia"},
        {titulo: "Transformes", year: 2016, pais: "Francia"},
    ];

    console.log(peliculas);

    var divPeliculas = document.querySelector('#peliculas');
    var index;
    for (index in peliculas) {
        var parrafo = document.createElement('p');
        parrafo .append(peliculas[index].titulo + " - " + peliculas[index].year);
        divPeliculas.append(parrafo);
    }
});







