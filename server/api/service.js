const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/service-multer.js');
const fs = require('fs');
const connetctSQL = require('../global/mysql')
const replace = require('../global/replace')

api.use(express.json());

api.post('/service-data', upload.single('file'), function (req, res) {
    let img_url = `${url}/service/${req.file.filename}`
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `service`(`title_am`, `title_en`, `title_ru`, `title_fr`, `img_url`, `img_name`, `content_am`, `content_en`, `content_ru`, `content_fr`) VALUES ('" + req.body.title_am + "','" + req.body.title_en + "','" + req.body.title_ru + "','" + req.body.title_fr + "','" + img_url + "','" + req.file.filename + "','" + req.body.content_am + "','" + req.body.content_en + "','" + req.body.content_ru + "','" + req.body.content_fr + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})

api.put('/service-data', function (req, res) {
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("UPDATE `service` SET `title_am`='" + req.body.title_am + "', `title_en`='" + req.body.title_en + "', `title_ru`='" + req.body.title_ru + "', `title_fr`='" + req.body.title_fr + "', `content_am`='" + req.body.content_am + "', `content_en`='" + req.body.content_en + "', `content_ru`='" + req.body.content_ru + "', `content_fr`='" + req.body.content_fr + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/service-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `service` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        result = replace(result, false)
        res.status(201).json({ result });
    });
})

api.post('/service-data-id', function (req, res) {
    connetctSQL.query("SELECT * FROM `service` WHERE id='"+ req.body.serviceId + "'", function (err, result, fields) {
        if (err) throw err;
        result = replace(result, false)
        res.status(201).json({ result });
    });
})

api.delete('/service-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `service` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/service/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;