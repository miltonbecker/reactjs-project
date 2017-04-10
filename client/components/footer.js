'use strict';
const React = require('react');

class Footer extends React.Component {

    render() {
        return (
            <footer>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                            <ul className='list-inline text-center'>
                                <li>
                                    <a href='javaScript:void(0);'>
                                        <span className='fa-stack fa-lg'>
                                            <i className='fa fa-circle fa-stack-2x'></i>
                                            <i className='fa fa-twitter fa-stack-1x fa-inverse'></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='javaScript:void(0);'>
                                        <span className='fa-stack fa-lg'>
                                            <i className='fa fa-circle fa-stack-2x'></i>
                                            <i className='fa fa-facebook fa-stack-1x fa-inverse'></i>
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href='javaScript:void(0);'>
                                        <span className='fa-stack fa-lg'>
                                            <i className='fa fa-circle fa-stack-2x'></i>
                                            <i className='fa fa-github fa-stack-1x fa-inverse'></i>
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <p className='copyright text-muted'>Powered by React and Node.js</p>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }

}

module.exports = Footer;