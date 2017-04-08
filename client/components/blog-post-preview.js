'use strict';
const React = require('react');
const Router = require('react-router-dom');

class PostPreview extends React.Component {

    render() {
        return (
            <div className="post-preview">
                <Router.Link to={`/post/${this.props.id}`}>
                    <h2 className="post-title">
                        {this.props.title}
                    </h2>
                    {/* Return subtitle only if it's set */}
                    {this.props.subtitle &&
                        <h3 className="post-subtitle">
                            {this.props.subtitle}
                        </h3>
                    }    
                </Router.Link>
                <p className="post-meta">Posted by&nbsp;
                    <a href="#">
                        {this.props.author}
                    </a> on {this.props.date}
                </p>
            </div>
        );
    }

}

module.exports = PostPreview;