'use strict';
const bodyParser = require('body-parser');
const mailer = require('nodemailer');
const routes = require('../common/routes');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

// create reusable transporter object using the default SMTP transport
const transporter = mailer.createTransport({
    service: 'GandiMail',
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
    }
});

function init(app) {
    app.post(routes.MAIL_SEND, urlencodedParser, function (req, res) {
        // setup email data with unicode symbols
        const body = req.body;

        let mailOptions = {
            from: process.env.MAIL_USER, // sender address
            to: process.env.MAIL_DEST, // list of receivers
            subject: `Blog Contact: ${body.name}`, // Subject line
            text: `
            Name: ${body.name}
            Email: ${body.email}
            Phone: ${body.phone}

            Message:
            ${body.message}`,
            html: `
            <p><b>Name:</b> ${body.name}</p>
            <p><b>Email:</b> ${body.email}</p>
            <p><b>Phone:</b> ${body.phone}</p>
            <p><b>Message:</b><br />
            ${body.message.replace(/\n/g, '<br />')}</p>`
        };

        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                res.status(500).json(error);
            } else {
                console.log('Message %s sent: %s', info.messageId, info.response);
                res.json('Message sent successfully.');
            }
        });
        // res.json('ok');
    });
}

module.exports = init;