var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/experience', function(req, res, next) {
  res.send('experience');
});
router.get('/education', function(req, res, next) {
  res.send('education');
});
router.get('/randomNumber', function(req, res, next) {
  res.send('number');
});

module.exports = router;
