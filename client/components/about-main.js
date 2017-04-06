'use strict';
const React = require('react');
const AboutHeader = require('./about-header');
const AboutContent = require('./about-content');

class AboutMain extends React.Component {
    render() {
        return (
            <div>
                <AboutHeader />
                <AboutContent />
            </div>
        );
    }
}

module.exports = AboutMain;