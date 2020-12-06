const express = require('express')
const api = express()
const login = require("./login");
const slider = require("./slider");

api.use(login);
api.use(slider);


module.exports = api;
