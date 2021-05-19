var express = require('express');
var router = express.Router();
var redis = require('redis')
var client = redis.createClient()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/experience', function(req, res, next) {
  client.get('experience', function(err, experience){
    res.send(JSON.parse(experience));
  })
});
router.get('/education', function(req, res, next) {
  client.get('education', function(err, education){
    res.send(JSON.parse(education));
  })
});
router.get('/randomNumber', function(req, res, next) {
  res.send('number');
});

module.exports = router;
