var express = require('express');
var app = express();
var router = require('./routes');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var uuid = require('uuid');
var session = require('express-session');

app.set('view engine', 'jade');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session( {
	genid: function(req) {
		return uuid.v1();
	},
	secret: 'steph17',
	cookie:{ secure: false },
	resave: false,
	saveUninitialized: false
}));
app.use('/', router);

app.use(express.static('public'));

app.get('/', function (req, res) {
   res.sendFile( __dirname + "/routes" + "/index.jade" );
});

/*
var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Example app listening at http://%s:%s", host, port)

});
*/
//var debug = require('debug')('express-example');
//var app = require('../app');
var models = require('./models');

app.set('port', process.env.PORT || 5000);

models.sequelize.sync().then(function () {
  var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port);
  });
});