'use strict';
const React = require('react');

const Navbar = require('./navbar');
const Header = require('./header');
const PostList = require('./post-list');
const Footer = require('./footer');

class Home extends React.Component {

    render() {
        return (
            <div>
                <Navbar />
                <Header />
                <PostList />
                <Footer />
            </div>
        );
    }

}

module.exports = Home;