'use strict';
const express = require('express');
const path = require('path');
const db = require('../db/db');
const routes = require('../common/routes');

const app = express();

app.get('/api/posts', function (req, res) {
    const query = [
        'SELECT p.id, p.title, p.subtitle, p.timestamp, u.name',
        ' FROM posts p INNER JOIN users u ON p.author = u.id',
        ' ORDER BY p.timestamp DESC'
    ].join('');

    db.query(query, [], (err, dbres) => {
        if (err)
            res.status(500).json('Database error: ' + err);
        else
            res.json(JSON.stringify(dbres.rows));
    });
});

app.get('/api/post/:postId', function (req, res) {
    const query = [
        'SELECT p.id, p.title, p.subtitle, p.text, p.timestamp, p.image, u.name AS author, p.markdown',
        ' FROM posts p INNER JOIN users u ON p.author = u.id',
        ' WHERE p.id = $1'
    ].join('');

    db.query(query, [ req.params.postId ], (err, dbres) => {
        if (err)
            res.status(500).json('Database error: ' + err);
        else if (!dbres.rows.length)
            res.status(404).json('Post not found');
        else
            res.json(JSON.stringify(dbres.rows[ 0 ]));
    });
});

function serveHome(req, res) {
    res.sendFile(path.resolve(__dirname, `../client/public/index.html`));
}

function myRouter(req, res, next) {
    for (let route in routes) {
        app.get(routes[ route ], serveHome);
    }
    next();
}

app.use(myRouter);

app.use(express.static(path.resolve(__dirname, '../client/public')));

module.exports = app;