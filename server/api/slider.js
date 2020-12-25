const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/slider-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')
const replace = require('../global/replace')

api.use(express.json());

api.post('/slider-data', upload.single('file'), function (req, res) {
    let img_url = `${url}/slider/${req.file.filename}`
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `slider`(`title_am`, `title_en`, `title_ru`, `title_fr`, `img_url`, `img_name`, `service_id`) VALUES ('" + req.body.title_am + "','" + req.body.title_en + "','" + req.body.title_ru + "','" + req.body.title_fr + "','" + img_url + "','" + req.file.filename + "','" + req.body.service_id + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})


api.put('/slider-data', function (req, res) {
    if (JSON.parse(req.body.token) == token) {
        req.body = replace(req.body, true)
        connetctSQL.query("UPDATE `slider` SET `title_am`='" + req.body.title_am + "', `title_en`='" + req.body.title_en + "', `title_ru`='" + req.body.title_ru + "', `title_fr`='" + req.body.title_fr + "', `service_id`='" + req.body.service_id + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/slider-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `slider` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        result = replace(result, false)
        res.status(201).json({ result });
    });
})

api.delete('/slider-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `slider` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/slider/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;