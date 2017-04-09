'use strict';
const express = require('express');
const path = require('path');

const routes = require('../common/routes');
const initApi = require('./api');
const initMail = require('./mail');

const app = express();

initApi(app);
initMail(app);
initPageRoutes();
initPublicRoute();

function initPageRoutes() {
    app.use(mapPageRoutes);
}
function mapPageRoutes(req, res, next) {
    for (let prop in routes) {
        if (prop.startsWith('PAGE_')) {
            app.get(routes[ prop ], serveHome);
        }    
    }
    next();
}
function serveHome(req, res) {
    res.sendFile(path.resolve(__dirname, '../client/public/index.html'));
}

function initPublicRoute() {
    app.use(express.static(path.resolve(__dirname, '../client/public')));
}

module.exports = app;