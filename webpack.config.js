'use strict';
const path = require('path');

const config = {
    entry: './client/react.js',
    output: {
        path: path.resolve(__dirname, 'client/public/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: []
};

module.exports = config;