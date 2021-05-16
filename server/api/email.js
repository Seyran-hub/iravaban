const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const nodemailer = require("nodemailer");

api.use(express.json());

api.post('/email', function (req, res) {
    main(req.body.subject,req.body.html,req.body.to).then(console.log).catch(console.error);
        res.status(200).send(true);
})

async function main(subject,html,to) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'mail.gritarres.com',
        port: 26,
        secure: false, // use SSL
        auth: {
            user: 'info@gritarres.com', // generated ethereal user
            pass: 'Aram19944991@', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'info@gritarres.com', // sender address
        to: to, // list of receivers
        subject: subject, // Subject line
        html: html, // plain text body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}

module.exports = api;