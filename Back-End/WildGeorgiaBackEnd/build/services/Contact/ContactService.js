"use strict";
//@ts-ignore
var con = require('../../server');
//@ts-ignore
exports.getContacts = function (callback) {
    con.query('SELECT * FROM contact', function (err, result) {
        if (err)
            throw err;
        return callback(result);
    });
};
