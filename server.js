const path = require('path')

const express = require('express')
const { engine } = require('express-handlebars')

const server = express();
const router = express.Router();

const { content } = require('./js/content')

/*
* TODO:
*  1. Minification
*  2. Image Compression
*  3. Contact Form Setup
*  4. Contentful API
*  5. Dev.to API
* */

server.engine('handlebars', engine({ defaultLayout: false}))
server.set('view engine', 'handlebars')
// server.use(express.static('views'))
server.use(express.static(path.join(__dirname, '/public')));

server.get('/', (req,res) => {
    res.render('index', { layout: false, content})
})
// server.use('/', router)
server.listen(1992)
console.log('Running at Port 1992')
