var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var ejs = require('ejs');

var newsRouter = require('./routes/news');
var zydRouter = require('./routes/zyd');
var indexRouter = require('./routes/index');
var contactRouer = require('./routes/contact');
var mapRouer = require('./routes/map');
var productRouter = require('./routes/product');
var brandRouter = require('./routes/brand');
var attractRouer = require('./routes/attract');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var dohanleRouter = require('./routes/dohanle');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.engine('html',ejs.__express);
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/news', newsRouter);
app.use('/zyd', zydRouter);
app.use('/index', indexRouter);
app.use('/contact',contactRouer);
app.use('/map',mapRouer);
app.use('/product', productRouter);
app.use('/attract',attractRouer);
app.use('/brand', brandRouter);
app.use('/login', loginRouter);
app.use('/register',registerRouter);
app.use('/dohanle',dohanleRouter);
// app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
