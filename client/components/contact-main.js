'use strict';
const React = require('react');
const Header = require('./header');
const ContactContent = require('./contact-content');

class ContactMain extends React.Component {

    constructor(props) {
        super(props);

        let lib = document.createElement('script');
        lib.src = '/dist/jqBootstrapValidation.min.js';
        lib.async = true;
        this.lib = lib;

        let script = document.createElement('script');
        script.src = '/dist/contact-me.min.js';
        script.async = true;
        this.script = script;
    }

    render() {
        return (
            <div>
                <Header image='/img/contact-bg.jpg' className='page-heading' title='Contact Me'
                    subtitle='This form won&apos;t actually send me an email, because spam' />
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
