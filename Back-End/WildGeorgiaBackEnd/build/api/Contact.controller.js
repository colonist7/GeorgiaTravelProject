"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-ignore
var ContactService = require('../services/Contact/ContactService');
//@ts-ignore
var app = require('../app');
//@ts-ignore
app.get('/api/contacts', function (req, res) {
    ContactService.getContacts(function (result) {
        res.json(result);
    });
});
