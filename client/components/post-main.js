'use strict';
const React = require('react');
const PostHeader = require('./post-header');
const PostContent = require('./post-content');
const dateFormat = require('dateformat');
const routes = require('../../common/routes');

class PostMain extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            post: ''
        };
    }

    getPost() {
        if (!this.props.id)
            return;

        let route = routes.API_GET_POST;
        let routeWithoutParam = route.slice(0, route.indexOf(':'));

        $.get(routeWithoutParam + this.props.id)
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
        this.getPost();
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