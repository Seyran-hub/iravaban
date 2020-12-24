const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/user-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')

api.use(express.json());

api.post('/user-data', upload.single('file'),  function (req, res) {
    let img_url = `${url}/user/${req.file.filename}`
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `user`(`name_am`, `name_en`, `name_ru`, `name_fr`, `surname_am`, `surname_en`, `surname_ru`, `surname_fr`, `content_am`,`content_en`,`content_ru`,`content_fr`, `facebook`, `instagram`, `linkedin`, `twitter`, `img_url`, `img_name`) VALUES ('" + req.body.name_am + "','" + req.body.name_en + "','" + req.body.name_ru + "','" + req.body.name_fr + "','" + req.body.surname_am + "','" + req.body.surname_en + "','" + req.body.surname_ru + "','" + req.body.surname_fr + "','" + req.body.content_am + "','" + req.body.content_en + "','" + req.body.content_ru + "','" + req.body.content_fr + "','" + req.body.facebook + "','" + req.body.instagram + "','" + req.body.linkedin + "','" + req.body.twitter + "','" + img_url + "','" + req.file.filename + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})


api.put('/user-data', function (req, res) {
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("UPDATE `user` SET `name_am`='" + req.body.name_am + "',`name_en`='" + req.body.name_en + "',`name_ru`='" + req.body.name_ru + "',`name_fr`='" + req.body.name_fr + "',`surname_am`='" + req.body.surname_am + "',`surname_en`='" + req.body.surname_en + "',`surname_ru`='" + req.body.surname_ru + "',`surname_fr`='" + req.body.surname_fr + "',`surname_fr`='" + req.body.surname_fr + "',`content_am`='" + req.body.content_am + "',`content_en`='" + req.body.content_en + "',`content_ru`='" + req.body.content_ru + "',`content_fr`='" + req.body.content_fr + "',`facebook`='" + req.body.facebook + "',`instagram`='" + req.body.instagram + "',`linkedin`='" + req.body.linkedin + "',`twitter`='" + req.body.twitter + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/user-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `user` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        res.status(201).json({ result });
    });
})

api.delete('/user-data/:id/:token/:fileName', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `user` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            fs.unlinkSync(`${__dirname}/../images/user/${req.params.fileName}`)
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;