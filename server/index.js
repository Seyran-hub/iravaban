const express = require('express')
const app = express()
const port = 3000
const nodemailer = require('nodemailer');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('view'))


app.get('/', function(req, res){
  res.sendFile('index.html');
}); 

app.post('/send_emile', (req, res) => {
  res.status(200).send(json);
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))