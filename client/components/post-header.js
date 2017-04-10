'use strict';
const React = require('react');

class PostHeader extends React.Component {

    render() {
        let image = this.props.image || '/img/post-bg.jpg';
        let style = {
            backgroundImage: `url(${image})`
        }
        return (
            <header className='intro-header'
                style={style}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                            <div className='post-heading'>
                                <h1>{this.props.title}</h1>
                                {this.props.subtitle &&
                                    <h2 className='subheading'>{this.props.subtitle}
                                    </h2>
                                }    
                                <span className='meta'>Posted by&nbsp;
                                    <a href='javaScript:void(0);'>{this.props.author}</a> on {this.props.timestamp}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        );
    }

}

module.exports = PostHeader;