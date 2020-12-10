var express = require('express');
var router = express.Router();
// ../ indica subir una posicion en carpetar
var control = require('../controllers/index.controller');

/* GET home page. */
router.get('/', control.index);
router.get('/hola',control.hola);
module.exports = router;
