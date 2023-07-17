require('dotenv').config()
const path = require('path')

const express = require('express')
const nodemailer = require('nodemailer');
const sm = require('sitemap')

const { engine,create } = require('express-handlebars')
const server = express();

const { content } = require('./js/content')

const {
    EM_NAME,
    EM_PASSWORD,
    EM_PROVIDER
} = process.env

let sitemap;

/*
* TODO:
*  1. Minification
*  2. Image Compression
*  3. Contact Form Setup
*  4. Contentful API
*  5. Dev.to API
*  6. GitHub API
* */

server.use(express.json())

server.engine('handlebars', engine({
    defaultLayout: false
}))
server.set('view engine', 'handlebars')
server.use(express.static(path.join(__dirname, '/public')));
server.use(express.static(path.join(__dirname, '/node_modules')));

server.get('/', (req,res) => {
    res.render('index', { layout: false, content})
})

server.post('/message', (req, res) => {
    const {
        subject,
        email: from,
        message: msg
    } = req.body;


    let transporter = nodemailer.createTransport({
        service: EM_PROVIDER,
        auth: {
            user: EM_NAME,
            pass: EM_PASSWORD
        }
    });

    const message = `
    <html>
    <head>
    <title>Zuri Hunter</title>
    </head>
    <body>
    <table width='50%' border='0' align='center' cellpadding='0' cellspacing='0'>
      <tr>
        <td colspan='2' align='center' valign='top'><img src='http://www.zurihunter.com/images/logo.png' width='140' height='140'></td>
      </tr>
      <tr>
        <td width='50%' align='right'>&nbsp;</td>
        <td align='left'>&nbsp;</td>
      </tr>
      <tr>
        <td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Name:</td>
        <td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>${name}</td>
      </tr>
      <tr>
        <td align='right' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Email:</td>
        <td align='left' valign='top' style='border-top:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>${from}</td>
      </tr>
      <tr>
        <td align='right' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 5px 7px 0;'>Message:</td>
        <td align='left' valign='top' style='border-top:1px solid #dfdfdf; border-bottom:1px solid #dfdfdf; font-family:Arial, Helvetica, sans-serif; font-size:13px; color:#000; padding:7px 0 7px 5px;'>${msg.replace(/\n/g, '<br/>')}</td>
      </tr>
    </table>
    </body>
    </html>
    `;


    let mailOptions = {
        from: from,
        to: EM_NAME,
        subject: '[PERSONAL WEBSITE] ' + subject,
        html: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send({ message: 'Error, message was not sent', error: error.toString() });
        } else {
            res.status(200).send({ message: 'Message sent successfully' });
        }
    });
});

server.get('/sitemap.xml', (req,res) => {
    if (!sitemap) {
        const urls = [
            { url: '/',  changefreq: 'weekly', priority: 1 },
            { url: '/blog',  changefreq: 'monthly', priority: 0.8 }
        ];

        sitemap = sm.createSitemap ({
            hostname: 'http://zurihunter.com',
            cacheTime: 600000,
            urls: urls
        });
    }

    res.header('Content-Type', 'application/xml');
    res.send(sitemap.toString());
})


server.listen(1992)
console.log('Running at Port 1992')
