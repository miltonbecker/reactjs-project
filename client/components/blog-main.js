'use strict';
const React = require('react');
const Header = require('./header');
const PostPreviewList = require('./blog-post-preview-list');

class BlogMain extends React.Component {
    render() {
        return (
            <div>
                <Header image="/img/home-bg.jpg" className="site-heading" title="Clean Blog" subtitle="A Clean Blog Theme by Start Bootstrap" />
                <PostPreviewList />
            </div>
        );
    }
}

module.exports = BlogMain;