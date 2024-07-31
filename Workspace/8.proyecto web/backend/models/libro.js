var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var libroSchema = Schema({
    nombre: String,
    autor: String,
    edicion: String,
    anio: Number,
    precio: Number
})

module.exports = mongoose.model('Libro', libroSchema);