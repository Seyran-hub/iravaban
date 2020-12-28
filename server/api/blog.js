const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/blog-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')
const replace = require('../global/replace')

api.use(express.json());

api.post('/blog-data', upload.single('file'), function (req, res) {
    let img_url = `${url}/blog/${req.file.filename}`
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `blog`(`title_am`, `title_en`, `title_ru`, `title_fr`,`content_am`, `content_en`, `content_ru`, `content_fr`, `img_url`, `img_name`) VALUES ('" + req.body.title_am + "','" + req.body.title_en + "','" + req.body.title_ru + "','" + req.body.title_fr + "','" + req.body.content_am + "','" + req.body.content_en + "','" + req.body.content_ru + "','" + req.body.content_fr + "','" + img_url + "','" + req.file.filename + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})


api.put('/blog-data', function (req, res) {
    req.body = replace(req.body, true)
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("UPDATE `blog` SET `title_am`='" + req.body.title_am + "', `title_en`='" + req.body.title_en + "', `title_ru`='" + req.body.title_ru + "', `title_fr`='" + req.body.title_fr + "',`content_am`='" + req.body.content_am + "', `content_en`='" + req.body.content_en + "', `content_ru`='" + req.body.content_ru + "', `content_fr`='" + req.body.content_fr + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/blog-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `blog` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        result = replace(result, false)
        res.status(201).json({ result });
    });
})

api.delete('/blog-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `blog` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/blog/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;