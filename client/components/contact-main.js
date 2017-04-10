'use strict';
const React = require('react');
const Header = require('./header');
const ContactContent = require('./contact-content');

class ContactMain extends React.Component {

    constructor(props) {
        super(props);

        let lib = document.createElement('script');
        lib.src = '/js/jqBootstrapValidation.min.js';
        lib.async = true;
        this.lib = lib;

        let script = document.createElement('script');
        script.src = '/js/contact-me.min.js';
        script.async = true;
        this.script = script;
    }

    render() {
        return (
            <div>
                <Header image='/img/contact-bg.jpg' className='page-heading' title='Contact Me'
                    subtitle='This form <b>is</b> working and you really will send me an email ;)' />
                <ContactContent />
            </div>
        );
    }

    componentDidMount() {
        document.body.appendChild(this.lib);
        document.body.appendChild(this.script);
    }

    componentWillUnmount() {
        document.body.removeChild(this.lib);
        document.body.removeChild(this.script);
    }

}

module.exports = ContactMain;