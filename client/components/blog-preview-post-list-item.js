'use strict';
const React = require('react');

class PostPreview extends React.Component {

    render() {
        return (
            <div className="post-preview">
                <a href="post.html">
                    <h2 className="post-title">
                        {this.props.title}
                    </h2>
                    {/* Return subtitle only if it's set */}
                    {this.props.subtitle &&
                        <h3 className="post-subtitle">
                            {this.props.subtitle}
                        </h3>
                    }    
                </a>
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