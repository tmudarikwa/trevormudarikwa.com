var express = require('express');
var router = express.Router();

var date = new Date();

/* GET home page. */
router.get('/', function(req, res, next) {
  var path = '/';
  res.locals.path = path;
  res.locals.year = date.getFullYear();
  res.render('index', { title: 'Trevor Mudarikwa - Front-End Web Developer ', year: date.getFullYear()});
});

module.exports = router;
