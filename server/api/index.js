const express = require('express')
const api = express()
const login = require("./login");
const slider = require("./slider");
const service = require("./service")
const about_us = require("./about_us")
const contact_us = require("./contact_us")
const emaile = require("./email")
const user = require("./user")

api.use(login);
api.use(slider);
api.use(service);
api.use(about_us);
api.use(contact_us);
api.use(emaile);
api.use(user);


module.exports = api;
