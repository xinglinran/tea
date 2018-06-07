var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {phone:'',pass:''});
});
router.post('/', function(req, res, next) {
  res.render('index', {phone:'',pass:''});
});

module.exports = router;
