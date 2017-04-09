'use strict';
const db = require('../db/db');
const routes = require('../common/routes');

function init(app) {
    app.get(routes.API_GET_ALL_POSTS, function (req, res) {
        const query = 'SELECT p.id, p.title, p.subtitle, p.timestamp, u.name'
            + ' FROM posts p INNER JOIN users u ON p.author = u.id'
            + ' ORDER BY p.timestamp DESC';

        db.query(query, [], (dbError, dbRes) => {
            if (dbError)
                res.status(500).json('Database error: ' + dbError);
            else
                res.json(JSON.stringify(dbRes.rows));
        });
    });

    app.get(routes.API_GET_POST, function (req, res) {
        const query = 'SELECT p.id, p.title, p.subtitle, p.text, p.timestamp, p.image, u.name AS author, p.markdown'
            + ' FROM posts p INNER JOIN users u ON p.author = u.id'
            + ' WHERE p.id = $1';

        db.query(query, [ req.params.id ], (dbError, dbRes) => {
            if (dbError)
                res.status(500).json('Database error: ' + dbError);
            else if (!dbRes.rows.length)
                res.status(404).json('Post not found');
            else
                res.json(JSON.stringify(dbRes.rows[ 0 ]));
        });
    });
}

module.exports = init;