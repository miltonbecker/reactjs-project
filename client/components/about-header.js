'use strict';
const React = require('react');

class AboutHeader extends React.Component {

    render() {
        return (
            <header className="intro-header" style={{ backgroundImage: "url('img/about-bg.jpg')" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className="page-heading">
                                <h1>About Me</h1>
                                <hr className="small" />
                                <span className="subheading">This is what I do.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

module.exports = AboutHeader;