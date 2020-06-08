var express = require('express');
var router = express.Router();
const indexController = require('./controllers/indexControl');
/* GET home page. */

router.get('/', indexController.getPage);
router.get('/index', indexController.getPage);

module.exports = router;
