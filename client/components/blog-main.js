'use strict';
const React = require('react');
const Header = require('./header');
const PostPreviewList = require('./blog-post-preview-list');

class BlogMain extends React.Component {
    render() {
        return (
            <div>
                <Header image='/img/home-bg.jpg' className='site-heading' title='Sample Blog'
                    subtitle='Based on the Clean Blog Theme by Start Bootstrap<br/>"Reactified", "Nodefied" and "Postgresfied"' />
                <PostPreviewList />
            </div>
        );
    }
}

module.exports = BlogMain;