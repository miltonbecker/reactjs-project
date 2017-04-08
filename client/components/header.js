'use strict';
const React = require('react');

class Header extends React.Component {

    render() {
        return (
            <header className="intro-header" style={{ backgroundImage: `url('${this.props.image}')` }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                            <div className={this.props.className}>
                                <h1>{this.props.title}</h1>
                                <hr className="small" />
                                <span className="subheading">{this.props.subtitle}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

module.exports = Header;