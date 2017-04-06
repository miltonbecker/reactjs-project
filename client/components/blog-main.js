'use strict';
const React = require('react');
const BlogHeader = require('./blog-header');
const PostList = require('./blog-preview-post-list');

class BlogMain extends React.Component {
    render() {
        return (
            <div>
                <BlogHeader />
                <PostList />
            </div>
        );
    }
}

module.exports = BlogMain;