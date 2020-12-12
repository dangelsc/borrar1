var express = require('express');
var router = express.Router();
var control = require('../controllers/user.controlle');
/* GET users listing. */
router.get('/', control.index);
module.exports = router;
