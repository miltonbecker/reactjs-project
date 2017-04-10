'use strict';
const React = require('react');
const Router = require('react-router-dom');
const routes = require('../../common/routes');

class PostPreview extends React.Component {

    render() {
        let route = routes.PAGE_POST;
        let routeWithoutParam = route.slice(0, route.indexOf(':'));
        return (
            <div className='post-preview'>
                <Router.Link to={routeWithoutParam + this.props.id}>
                    <h2 className='post-title'>
                        {this.props.title}
                    </h2>
                    {/* Return subtitle only if it's set */}
                    {this.props.subtitle &&
                        <h3 className='post-subtitle'>
                            {this.props.subtitle}
                        </h3>
                    }    
                </Router.Link>
                <p className='post-meta'>Posted by&nbsp;
                    <a href='javaScript:void(0);'>
                        {this.props.author}
                    </a> on {this.props.date}
                </p>
            </div>
        );
    }

}

module.exports = PostPreview;