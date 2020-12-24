const express = require('express')
const api = express()
const token = require("../global/token");
const url = require("../global/url");
const nodemailer = require("nodemailer");

api.use(express.json());

api.post('/email', function (req, res) {
    main(req.body.subject,req.body.html).then(e => {
        res.status(200).send(true);
    })
})

async function main(subject,html) {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // use SSL
        auth: {
            user: 'arman.babajanyan.fd@gmail.com', // generated ethereal user
            pass: '199409355600000', // generated ethereal password
        },
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'arman.babajanyan.fd@gmail.com', // sender address
        to: "arman.babajanyan1994@gmail.com", // list of receivers
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