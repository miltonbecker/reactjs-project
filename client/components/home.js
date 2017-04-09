'use strict';
const React = require('react');
const Router = require('react-router-dom');
const routes = require('../../common/routes');

const Navbar = require('./navbar');
const Footer = require('./footer');

const BlogMain = require('./blog-main');
const AboutMain = require('./about-main');
const ContactMain = require('./contact-main');
const PostMain = require('./post-main');

class Home extends React.Component {

    render() {
        return (
            <Router.BrowserRouter>
                <div>
                    <Navbar />

                    <Router.Route
                        exact={true}
                        path={routes.PAGE_HOME}
                        component={BlogMain}
                    />

                    <Router.Route
                        path={routes.PAGE_ABOUT}
                        component={AboutMain}
                    />

                    <Router.Route
                        path={routes.PAGE_CONTACT}
                        component={ContactMain}
                    />

                    <Router.Route
                        path={routes.PAGE_POST}
                        render={({ match }) => (
                            <PostMain id={match.params.id} />
                        )}
                    />

                    <Footer />
                </div>
            </Router.BrowserRouter>
        );
    }

}

module.exports = Home;