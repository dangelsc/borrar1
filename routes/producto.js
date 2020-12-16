var express = require('express');
var router = express.Router();
var control = 
require('../controllers/producto.controller');

router.get('/',control.index);
router.get('/nuevo',control.nuevo);
router.post('/nuevo',control.nuevo_post);
router.get('/edit/:id',control.edit);
router.post('/edit/:id',control.edit_post);
router.get('/borrar/:id',control.borrar);
module.exports = router;