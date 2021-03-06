const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const path = require('path');
const cors = require('cors');

const restApi = require('./api');


app.use(express.json());
app.use(cors())
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, './images')));
app.use('/images', express.static( __dirname + '/./images'));
app.use('/api', restApi);

app.use(express.static(path.join(__dirname, '../project/dist/lufz-ng')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../project/dist/lufz-ng/index.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))