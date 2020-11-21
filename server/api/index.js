const express = require('express')
const api = express()
const login = require("./login");

api.use(login);


module.exports = api;
