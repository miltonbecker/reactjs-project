'use strict';
const React = require('react');
const renderHTML = require('react-render-html');
const marked = require('marked');

class PostContent extends React.Component {

    render() {
        return (
            <article>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1'>
                            {/* React first renders the page without any props (because the post is fetched after it was mounted) */}
                            {this.props.text &&
                                this.renderText()
                            }
                        </div>
                    </div>
                </div>
            </article>
        );
    }

    renderText() {
        if (this.props.markdown)
            return renderHTML(marked(this.props.text));
        else
            return renderHTML(this.props.text);
    }

}

module.exports = PostContent;