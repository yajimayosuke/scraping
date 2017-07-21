var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

var server = app.listen(3000, function(){
		    console.log("Node.js is listening to PORT:" + server.address().port);
});

var photoList = [
    {
		id: "001",
		name: "photo001.jpg",
		type: "jpg",
		dataUrl: "https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg"
	},{
		id: "002",
		name: "photo002.jpg",
		type: "jpg",
		dataUrl: "https://pbs.twimg.com/profile_images/378800000220029324/fe66faeca20115da8566e51d83447ead_400x400.jpeg"
	}
]

app.get("/api/photo/list", function(req, res, next){
		    res.json(photoList);
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
