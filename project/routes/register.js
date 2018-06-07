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
	// 接收注册页传递过来的电话号码
	var phone = req.body.phone;

	// 查询数据库，判断号码是否存在
	var  Sql = 'SELECT * FROM users WHERE name='+phone;

	// 执行查询语句   connection(sql,data,callback)
	connection.query(Sql,function (err, result) {
	        if(err){
	         console.log('[SELECT ERROR] - ',err.message);
	         return;
	        }        
	       // console.log(result.length);        
	       if(result.length){
	       	res.send('1');
	       }else{
	       	res.send('2');
	       }
	});

  	// res.render('register', { title: 'Express' });
});

module.exports = router;