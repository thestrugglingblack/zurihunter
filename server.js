const path = require('path')
const express = require('express')
const hbs = require('express-handlebars')
const server = express();
const router = express.Router();

/*
* TODO:
*  1. Minification
*  2. Image Compression
*  3. Contact Form Setup
*  4. Contentful API
*  5. Dev.to API
* */

server.engine('handlebars', hbs())
server.set('view engine', 'handlebars')
server.use(express.static('public'))
server.use('/', router)
server.listen(1992)
console.log('Running at Port 1992')
