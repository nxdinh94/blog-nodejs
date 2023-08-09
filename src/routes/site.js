

const express = require('express');
var router = express.Router();

const newsController = require('../app/controllers/NewsController');
const siteController = require('../app/controllers/SiteController');

// newsController.index

// router.use('/:slug', newsController.show);
// router.use('/', newsController.index);

router.get('/search', siteController.search);
router.get('/', siteController.index);
 


module.exports = router;