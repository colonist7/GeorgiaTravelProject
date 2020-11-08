let http = require('http');
let sql = require('mysql');
//@ts-ignore
let app = require('./app');

// config for your database
var config = {
	user: 'root',
	password: '',
	host: '127.0.0.1',
	port: '3308',
	database: 'wildgeorgiadb',
};

//@ts-ignore
let con = sql.createConnection(config);

let port = process.env.PORT || 8080;

let server = http.createServer(app);

module.exports = con;

let ContactController = require('./api/Contact.controller');

server.listen(port);
