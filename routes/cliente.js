var express = require('express');
var router = express.Router();
var control = require('../controllers/cliente.controller');
//recuperar con method get
//1. usar la url
//dominio.com/client?edad=54&nombre=pepe
router.get('/',control.index);

//2. url pretty
//dominio.com/cliente/nuevo/88/pepe
router.get('/nuevo/:edad/:nombre',control.nuevo);

router.post('/guardar',control.guardar);


module.exports=router;