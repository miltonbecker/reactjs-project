'use strict';
const React = require('react');
const ReactDOM = require('react-dom');

const Home = require('./components/home');

const homeTarget = document.getElementById('home');

ReactDOM.render(
  <Home />,
  homeTarget
);
