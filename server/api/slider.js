const express = require('express')
const api = express()
const token = require("../global/token");
const upload = require('./multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')

api.use(express.json());
console.log(__dirname + '../images/')




api.post('/slider-img', upload.single('file'), function (req, res) {
    let img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    console.log(new Buffer.alloc(11,encode_image, 'base64'),'path')
    if(JSON.parse(req.body.token) == token)
        res.status(200).send(true);
    else
        res.status(200).send(req.body);
})

api.get('/dirname', function (req, res, next) {
    const directoryPath = path.join('../', 'images');
    fs.readdir(directoryPath, function (err, files) {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        }

        let data = {}
        Object.assign(data, files);
        res.send(data)
    });
})

// api.post('/send_login', (req, res) => {
//     console.log(req.query,req.body,'ddddd')
//     if(req.body.login == 'admin' && req.body.password == 'admin')
//       res.status(200).send({token: 'a5sd447sdf4fs5s4dg6g56sdff78dfg45dsf4ss1df84gsd6f5sd6g4sd6g54h46sgf5sd6f5'});
//     else{
//       res.status(200).send({errMSG: 'your email or password is invalid'});
//     }
//   })



module.exports = api;