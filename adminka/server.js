const express = require('express')  
const app = express()
const port = process.env.PORT || 3001;
const path = require('path')
const cors = require('cors')

app.use(cors());
app.use(express.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, 'dist/adminka')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/adminka/index.html')));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))