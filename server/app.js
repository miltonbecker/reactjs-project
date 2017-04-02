'use strict';
const express = require('express');
const path = require('path');

const app = express();

/*
app.get('/', function (req, res) {
    //res.sendFile(path.resolve(__dirname, '../client/pages/index.html')); 
    res.sendFile(path.resolve(__dirname, '../client/index.html')); 
});
*/

app.use(express.static(path.resolve(__dirname, '../client')));

// app.use('/vendor', express.static(path.resolve(__dirname, '../client/vendor')));
// app.use('/dist', express.static(path.resolve(__dirname, '../client/dist')));
// app.use('/css', express.static(path.resolve(__dirname, '../client/css')));
// app.use('/js', express.static(path.resolve(__dirname, '../client/js')));
// app.use('/img', express.static(path.resolve(__dirname, '../client/img')));

module.exports = app;