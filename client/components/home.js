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
                        path={routes.HOME_ROUTE}
                        component={BlogMain}
                    />

                    <Router.Route
                        path={routes.ABOUT_ROUTE}
                        component={AboutMain}
                    />

                    <Router.Route
                        path={routes.CONTACT_ROUTE}
                        component={ContactMain}
                    />

                    <Router.Route
                        path={routes.POST_ROUTE}
                        render={({ match }) => (
                            <PostMain id={match.params.postId} />
                        )}
                    />

                    <Footer />
                </div>
            </Router.BrowserRouter>
        );
    }

}

module.exports = Home;