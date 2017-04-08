'use strict';
const React = require('react');
const PostHeader = require('./post-header');
const PostContent = require('./post-content');
const $ = require('jquery');
const dateFormat = require('dateformat');

class PostMain extends React.Component {
    constructor() {
        super();

        this.state = {
            post: ''
        };
    }

    _getPost() {
        if (!this.props.id)
            return;

        $.get(`/api/post/${this.props.id}`)
            .done((data) => {
                this.setState({ post: JSON.parse(data) });
            })
            .fail((jqReq, text) => {
                this.setState({
                    post: {
                        title: 'Failed to load post',
                        subtitle: text
                    }
                })
            });
    }

    componentDidMount() {
        this._getPost();
    }

    render() {
        let post = this.state.post;
        return (
            <div key={post.id}>
                <PostHeader
                    image={post.image}
                    title={post.title}
                    subtitle={post.subtitle}
                    author={post.author}
                    timestamp={dateFormat(post.timestamp, 'mmmm dS, yyyy @ h:MM TT')}
                />
                <PostContent text={post.text} markdown={post.markdown} />
            </div>
        );
    }
}

module.exports = PostMain;