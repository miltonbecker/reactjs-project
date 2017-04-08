'use strict';
const React = require('react');
const Header = require('./header');
const ContactContent = require('./contact-content');

class ContactMain extends React.Component {
    render() {
        return (
            <div>
                <Header image="/img/contact-bg.jpg" className="page-heading" title="Contact Me" subtitle="Have questions? I have answers (maybe)." />
                <ContactContent />
            </div>
        );
    }
}

module.exports = ContactMain;