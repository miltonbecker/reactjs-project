'use strict';
const React = require('react');
const Router = require('react-router-dom');

const Navbar = require('./navbar');
const Footer = require('./footer');

const BlogMain = require('./blog-main');
const AboutMain = require('./about-main');

class Home extends React.Component {

    render() {
        return (
            <Router.BrowserRouter>
                <div>
                    <Navbar />

                    <Router.Route
                        exact={true}
                        path='/'
                        component={BlogMain}
                    />

                    <Router.Route
                        path='/about'
                        component={AboutMain}
                    />

                    <Footer />
                </div>
            </Router.BrowserRouter>
        );
    }

}

module.exports = Home;