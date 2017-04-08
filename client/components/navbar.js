'use strict';
const React = require('react');
const Router = require('react-router-dom');
const routes = require('../../common/routes');

class Navbar extends React.Component {

    render() {
        return (
            <nav id="main-menu" className="navbar navbar-default navbar-custom navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header page-scroll">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span className="sr-only">Toggle navigation</span>
                            Menu <i className="fa fa-bars"></i>
                        </button>
                        <Router.Link className="navbar-brand" to={routes.HOME_ROUTE}>
                            Start Bootstrap
                        </Router.Link>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <Router.Link to={routes.HOME_ROUTE}>
                                    Home
                                </Router.Link>
                            </li>
                            <li>
                                <Router.Link to={routes.ABOUT_ROUTE}>
                                    About
                                </Router.Link>
                            </li>
                            <li>
                                <Router.Link to={routes.CONTACT_ROUTE}>
                                    Contact
                                </Router.Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }

}

module.exports = Navbar;