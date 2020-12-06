const express = require('express')  
const app = express()
const port = 3000
const nodemailer = require('nodemailer');
const restApi = require("./api");
const path = require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('view'))
app.use(express.static(path.join(__dirname, '../images')))
app.use('/images', express.static( __dirname + '/../images'));
app.use(restApi)

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))