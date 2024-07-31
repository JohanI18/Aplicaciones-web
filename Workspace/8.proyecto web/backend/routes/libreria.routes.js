var express = require('express');
var router = express.Router();
var libroController = require('../controllers/libro.controller');
var multiparty = require('connect-multiparty');
var multipartyMiddleware = multiparty({uploadDir: './uploads'});

//pagina de inicio
router.get('/inicio', libroController.inicio);

//guardar libro
router.post('/guardar-libro', libroController.saveLibro);

module.exports = router;