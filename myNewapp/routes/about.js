let express = require('express');
let router = express.Router();
const aboutController = require('../controllers/aboutControl');

router.get('/about', aboutController.getPage);

module.exports = router;
