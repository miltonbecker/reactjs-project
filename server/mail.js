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
        const body = req.body;

        // checks for bot trap         
        if (body.misc) {
            res.status(500).json('Nope');
            return;
        }

        let mailOptions = {
            from: process.env.MAIL_USER, 
            to: process.env.MAIL_DEST, // can be a list
            subject: `Blog Contact: ${body.name}`, 
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