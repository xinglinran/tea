var express = require('express');
var router = express.Router();
var mysql = require('mysql');
 
var connection = mysql.createConnection({
 host     : 'localhost',//主机名
  user     : 'alin',//用户名
  password : '123456',//密码
  database : 'tea'	
});
connection.connect();
console.log('数据库连接成功');

/* GET home page. */
router.get('/', function(req, res, next) {
	var  Sql = 'SELECT COUNT(*) AS one FROM user'
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }        
	        // console.log(result);
	         res.render('news', { title: result});
	});

});
router.post('/', function(req, res, next) {
	var num = req.body.phone;
	console.log(num);
	var  Sql = 'SELECT * FROM user LIMIT '+num*5+',5'
	// 执行查询语句   connection(sql,data,callback)
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }  
	       res.send(result);
	});
  	// res.render('register', { title: 'Express' });
});

module.exports = router;
