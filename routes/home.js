var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('site', {title : 'Irving Arredondo', layout: 'site.hbs'});
});

module.exports = router;
