const express = require('express')
const api = express()
const login = require("./login");
const slider = require("./slider");
const service = require("./service")

api.use(login);
api.use(slider);
api.use(service);


module.exports = api;
