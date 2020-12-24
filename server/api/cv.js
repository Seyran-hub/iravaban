const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/cv-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')

api.use(express.json());

api.post('/cv-data', upload.single('file'),  function (req, res) {
    let img_url = `${url}/cv/${req.file.filename}`
        connetctSQL.query("INSERT INTO `cv`(`status`, `name`, `surname`, `phone`, `education`, `experience`, `languages`,`computer_skills`, `img_url`, `img_name`) VALUES ('" + req.body.status + "','" + req.body.name + "','" + req.body.surname + "','" + req.body.phone + "','" + req.body.education + "','" + req.body.experience + "','" + req.body.languages + "','" + req.body.computer_skills + "','" + img_url + "','" + req.file.filename + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
})

api.get('/cv-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `cv` WHERE status=0", function (err, result, fields) {
        if (err) throw err;
        res.status(201).json({ result });
    });
})

api.get('/cv-data-status', function (req, res) {
    connetctSQL.query("SELECT * FROM `cv` WHERE status=1", function (err, result, fields) {
        if (err) throw err;
        res.status(201).json({ result });
    });
})

api.delete('/cv-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `cv` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/cv/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;