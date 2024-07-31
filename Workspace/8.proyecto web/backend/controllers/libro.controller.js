var Libro = require('../models/libro');

var controller = {
    inicio: function (req, res) {
        return res.status(502).send({message: "<h1>Hola 3</h1>"})
    },
    saveLibro:async function (req, res) {
        try {
            var libro = new Libro();
            var params = req.body;
            libro.nombre = params.nombre;
            libro.autor = params.autor;
            libro.edicion = params.edicion;
            libro.anio = params.anio;
            libro.precio = params.precio;

            var libroStored = await libro.save();
            if (!libroStored) {
                return res.status(201).send({message: 'No se ha podido guardar el libro'});
            }
            return res.status(200).send({libro: libroStored});
        } catch (error) {
            return res.status(500).send({message: 'Error al guardar el documento'});
        }
    }
};


module.exports = controller;