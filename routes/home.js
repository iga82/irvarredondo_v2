var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Irving Arredondo' });
});

module.exports = router;
