const path = require('path')

const express = require('express')

const { engine,create } = require('express-handlebars')

const server = express();
const router = express.Router();

const { content } = require('./js/content')
const axios = require("axios");

/*
* TODO:
*  1. Minification
*  2. Image Compression
*  3. Contact Form Setup
*  4. Contentful API
*  5. Dev.to API
*  6. GitHub API
* */

server.engine('handlebars', engine({
    defaultLayout: false
}))
server.set('view engine', 'handlebars')
server.use(express.static(path.join(__dirname, '/public')));
server.use(express.static(path.join(__dirname, '/node_modules')));

server.get('/', (req,res) => {
    res.render('index', { layout: false, content})
})
server.listen(1992)
console.log('Running at Port 1992')
