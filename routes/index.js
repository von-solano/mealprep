var express = require('express');
var router = express.Router();

/* GET dashboard */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET recipes */
router.get('/recipes', function(req, res, next) {
  res.render('recipes');
});

module.exports = router;
