'use strict';
const React = require('react');
const PostPreview = require('./blog-post-preview');
const $ = require('jquery');
const dateFormat = require('dateformat');
const routes = require('../../common/routes');

class PostPreviewList extends React.Component {

    constructor() {
        super();

        this.state = {
            posts: []
        };
    }

    _getPosts() {
        $.get(routes.API_GET_ALL_POSTS)
            .done((data) => {
                this.setState({ posts: JSON.parse(data) });
            })
            .fail((jqReq, text) => {
                this.setState({
                    posts: [ {
                        title: 'Failed to load posts',
                        subtitle: text
                    }]
                })
            });
    }

    componentDidMount() {
        this._getPosts();
    }

    render() {
        let postPreviews = this.state.posts.map((post) => {
            return (
                <div key={post.id}>
                    <PostPreview
                        title={post.title}
                        subtitle={post.subtitle}
                        author={post.name}
                        date={dateFormat(post.timestamp, 'mmmm dS, yyyy @ h:MM TT')} 
                        id={post.id}
                    />
                    <hr />
                </div>
            );
        });


        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                        {postPreviews}

                        {/*<!-- Pager -->*/}
                        <ul className='pager'>
                            <li className='next'>
                                <a href='javaScript:void(0);'>Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = PostPreviewList;