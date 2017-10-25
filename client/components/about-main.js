'use strict';
const React = require('react');
const Header = require('./header');
const AboutContent = require('./about-content');

class AboutMain extends React.Component {
    render() {
        return (
            <div>
                <Header image='/img/about-bg.jpg' className='page-heading' title='About Me' subtitle='This is what I do' />
                <AboutContent />
            </div>
        );
    }
}

module.exports = AboutMain;
