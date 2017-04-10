'use strict';
const React = require('react');
const Router = require('react-router-dom');
const routes = require('../../common/routes');

class Navbar extends React.Component {

    render() {
        let route = routes.PAGE_POST;
        let routeWithoutParam = route.slice(0, route.indexOf(':'));
        let samplePostRoute = routeWithoutParam + '1';
        return (
            <nav id='main-menu' className='navbar navbar-default navbar-custom navbar-fixed-top'>
                <div className='container-fluid'>
                    <div className='navbar-header page-scroll'>
                        <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1'>
                            <span className='sr-only'>Toggle navigation</span>
                            Menu <i className='fa fa-bars'></i>
                        </button>
                        <Router.Link className='navbar-brand' to={routes.PAGE_HOME}>
                            Sample Blog
                        </Router.Link>
                    </div>

                    <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
                        <ul className='nav navbar-nav navbar-right'>
                            <li>
                                <Router.Link to={routes.PAGE_HOME}>
                                    Home
                                </Router.Link>
                            </li>
                            <li>
                                <Router.Link to={samplePostRoute}>
                                    Sample Post
                                </Router.Link>
                            </li>
                            <li>
                                <Router.Link to={routes.PAGE_ABOUT}>
                                    About
                                </Router.Link>
                            </li>
                            <li>
                                <Router.Link to={routes.PAGE_CONTACT}>
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