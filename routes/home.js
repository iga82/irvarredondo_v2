var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', { title: 'Irving Arredondo' });
});

router.get('/about', function(req, res){
  res.render('about', { title: 'About' });
});

router.get('/portfolio', function(req, res){
  res.render('portfolio', { title: 'Portfolio' });
});

module.exports = router;
