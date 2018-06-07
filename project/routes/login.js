var express = require('express');
var router = express.Router();
var mysql = require('mysql');

//建立数据库连接
var connection = mysql.createConnection({
  host     : 'localhost',//主机名
  user     : 'alin',//用户名
  password : '123456',//密码
  database : 'tea'
});
//连接数据库
connection.connect();
console.log('数据库连接成功32');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login',{phone:'',pass:''});
});
 /*POST home page. */
router.post('/', function(req, res, next) {
	// console.log(req.body);
	var phone = req.body.phone;
	//通过phone查询密码
	var  Sql = 'SELECT pass FROM users WHERE name="'+phone+'"';
	// console.log(Sql);

	// 执行添加语句   connection(sql,data,callback)
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }
	        res.send(result);
	});
});
module.exports = router;