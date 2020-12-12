var express = require('express');
var router = express.Router();
var control = 
require('../controllers/producto.controller');

router.get('/',control.index);
router.get('/nuevo',control.nuevo);
module.exports = router;