var express = require('express');
var router = express.Router();
const indexController = require('./controller/indexControl');
/* GET home page. */

router.get('/', indexController.getPage);
router.get('/index', indexController.getPage);

module.exports = router;
