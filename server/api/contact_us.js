const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const upload = require('../multers/slider-multer.js');
const fs = require('fs');
const path = require('path');
const connetctSQL = require('../global/mysql')

api.use(express.json());

api.post('/contact-us-data', function (req, res) {
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("INSERT INTO `contactus`(`time`, `date_am`, `date_en`, `date_ru`, `date_fr`, `phone`, `address_am`, `address_en`, `address_ru`, `address_fr`, `emile`, `lang_am`, `lang_en`, `lang_ru`, `lang_fr`, `facebook`, `instagram`, `linkedin`, `twitter`, `lat`, `lot`) VALUES ('" + req.body.time + "','" + req.body.date_am + "','" + req.body.date_en + "','" + req.body.date_ru + "','" + req.body.date_fr + "','" + req.body.phone + "','" + req.body.address_am + "','" + req.body.address_en + "','" + req.body.address_ru + "','" + req.body.address_fr + "','" + req.body.emile + "','" + req.body.lang_am + "','" + req.body.lang_en + "','" + req.body.lang_ru + "','" + req.body.lang_fr + "','" + req.body.facebook + "','" + req.body.instagram + "','" + req.body.linkedin + "','" + req.body.twitter + "','" + req.body.lat + "','" + req.body.lot + "')", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(500).send(false);
})


api.put('/contact-us-data', function (req, res) {
    if (JSON.parse(req.body.token) == token) {
        connetctSQL.query("UPDATE `contactus` SET `time`='" + req.body.time + "',`date_am`='" + req.body.date_am + "',`date_en`='" + req.body.date_en + "',`date_ru`='" + req.body.date_ru + "',`date_fr`='" + req.body.date_fr + "',`phone`='" + req.body.phone + "',`address_am`='" + req.body.address_am + "',`address_en`='" + req.body.address_en + "',`address_ru`='" + req.body.address_ru + "',`address_fr`='" + req.body.address_fr + "',`address_fr`='" + req.body.address_fr + "',`emile`='" + req.body.emile + "',`lang_am`='" + req.body.lang_am + "',`lang_en`='" + req.body.lang_en + "',`lang_ru`='" + req.body.lang_ru + "',`lang_fr`='" + req.body.lang_fr + "',`facebook`='" + req.body.facebook + "',`instagram`='" + req.body.instagram + "',`linkedin`='" + req.body.linkedin + "',`twitter`='" + req.body.twitter + "',`lat`='" + req.body.lat + "',`lot`='" + req.body.lot + "' WHERE id='" + req.body.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

api.get('/contact-us-data', function (req, res) {
    connetctSQL.query("SELECT * FROM `contactus` WHERE 1", function (err, result, fields) {
        if (err) throw err;
        res.status(201).json({ result });
    });
})

api.delete('/contact-us-data/:id/:token', function (req, res) {
    if (JSON.parse(req.params.token) == token) {
        connetctSQL.query("DELETE FROM `contactus` WHERE id='" + req.params.id + "'", function (err, result, fields) {
            if (err) throw err;
            res.status(201).json({ result });
        });
    }
    else
        res.status(200).send(false);
})

module.exports = api;