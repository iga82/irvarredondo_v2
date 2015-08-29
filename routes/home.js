var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('home', {title : 'Irving Arredondo', layout: 'home.hbs'});
});

router.get('/about', function(req, res){
  res.render('about', {title : 'About', layout: 'about.hbs'});
});

router.get('/portfolio', function(req, res){
  res.render('portfolio', {title : 'Portfolio', layout: 'portfolio.hbs'});
});

router.get('/contact', function(req, res){
  res.render('contact', {title : 'Contact', layout: 'contact.hbs'});
});

router.get('/poolscore', function(req, res){
  res.render('poolscore', {title : 'Pool Score', layout: 'poolscore.hbs'});
});

module.exports = router;
