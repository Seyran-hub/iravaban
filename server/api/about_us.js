const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/about_us-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')
const replace = require('../global/replace')

api.use(express.json());

api.post('/about-us-data', upload.single('file'), function (req, res) {
    let img_url = `${url}/about_us/${req.file.filename}`
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `aboutus`(`content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`) VALUES ('" + req.body.content_am + "','" + req.body.content_en + "','" + req.body.content_ru + "','" + req.body.content_fr + "','" + img_url + "','" + req.file.filename + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})


api.put('/about-us-data', function (req, res) {
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("UPDATE `aboutus` SET `content_am`='" + req.body.content_am + "', `content_en`='" + req.body.content_en + "', `content_ru`='" + req.body.content_ru + "', `content_fr`='" + req.body.content_fr + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/about-us-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `aboutus` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        result = replace(result, false)
        res.status(201).json({ result });
    });
})

api.delete('/about-us-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `aboutus` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/about_us/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;