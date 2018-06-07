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
console.log('数据库连接成功');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('register');
});

/*POST home page. */
router.post('/', function(req, res, next) {
	console.log(req.body);
	// 接收注册页传递过来的信息
	var phone = req.body.phone;
	var pass = req.body.pass;
	// console.log(phone);
	// console.log(pass);

	//将获取到的信息添加到数据库
	var  Sql = 'INSERT INTO users(name,pass) value(?,?)';
	var insertData = [phone,pass];

	// 执行添加语句   connection(sql,data,callback)
	connection.query(Sql,insertData,function (err, result) {
	        if(err){
	         console.log('[INSERT ERROR] - ',err.message);
	         return;
	        }else{
	        	// 
	        	console.log('数据库添加成功');
	        	// 跳转到登录页面
	        	res.render('login',{phone:phone,pass:pass});
	        }        
	});
});

module.exports = router;