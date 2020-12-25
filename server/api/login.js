const express = require('express')
const api = express()
const token = require("../global/token");
api.use(express.json());

api.post('/send_login', (req, res) => {
    if(req.body.login == 'admin' && req.body.password == 'admin')
      res.status(200).send({token: token});
    else{
      res.status(200).send({errMSG: 'your email or password is invalid'});
    }
  })



module.exports = api;