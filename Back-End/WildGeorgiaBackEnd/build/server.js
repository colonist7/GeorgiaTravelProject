"use strict";
var http = require('http');
var sql = require('mysql');
//@ts-ignore
var app = require('./app');
// config for your database
var config = {
    user: 'root',
    password: '',
    host: '127.0.0.1',
    port: '3308',
    database: 'wildgeorgiadb',
};
//@ts-ignore
var con = sql.createConnection(config);
var port = process.env.PORT || 8080;
var server = http.createServer(app);
module.exports = con;
var ContactController = require('./api/Contact.controller');
server.listen(port);
