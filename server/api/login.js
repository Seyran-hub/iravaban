const express = require('express')
const api = express()

api.use(express.json());


api.post('/send_login', (req, res) => {
    console.log(req.query,req.body,'ddddd')
    if(req.body.login == 'admin' && req.body.password == 'admin')
      res.status(200).send({token: 'a5sd447sdf4fs5s4dg6g56sdff78dfg45dsf4ss1df84gsd6f5sd6g4sd6g54h46sgf5sd6f5'});
    else{
      res.status(200).send({errMSG: 'your email or password is invalid'});
    }
  })



module.exports = api;