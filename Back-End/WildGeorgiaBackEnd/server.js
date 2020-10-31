var express = require('express'); // requre the express framework
const app = express();
var fs = require('fs'); //require file system object
var mysql = require('mysql');
var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true }));

var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'TestDB',
	port: '3308',
});

exports.con = con;

exports.app = app;
exports.fs = fs;

var users = require('./api/users/users');

// Create a server to listen at port 8080
var server = app.listen(8080, function () {
	var host = server.address().address;
	var port = server.address().port;
	console.log('REST API demo app listening at http://%s:%s', host, port);
});
