var express = require('express');
var router = express.Router();
var mysql = require('mysql');



var connection = mysql.createConnection({
	host:'localhost',
	user:'alin',
	password:'123456',
	database:'tea'
});

connection.connect();
console.log('数据库连接成功')

router.get('/', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.post('/', function(req, res, next) {

	var Sql = 'SELECT * FROM cha';
	connection.query(Sql,function (err, result) {
	          if(err){
	     		console.log('[SELECT ERROR] - ',err.message);
	         		return;
	          }        
	        res.send(result);  
	});
});

module.exports = router;
