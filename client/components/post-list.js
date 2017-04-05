'use strict';
const React = require('react');
const PostPreview = require('./post-preview');

class PostList extends React.Component {

    _getPosts() {
        //to run a query we just pass it to the pool
        //after we're done nothing has to be taken care of
        //we don't have to return any client to the pool or close a connection
        // pool.query('SELECT * FROM POSTS', [ '2' ], function (err, res) {
        //     if (err) {
        //         return console.error('error running query', err);
        //     }

        //     console.log('number:', res.rows[ 0 ].number);
        // });
        // return someList.map((item) => {
        //     return (
        //         <PostPreview title={item.title} key={item.id} />
                    //Dynamic JSX elements need to have a key 
        //     )
        // });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1">
                        <PostPreview
                            title="Man must explore, and this is exploration at its greatest"
                            subtitle="Problems look mighty small from 150 miles up"
                            author="Start Bootstrap"
                            date="September 24, 2014"
                        />
                        <hr />
                        <PostPreview
                            title="I believe every human has a finite number of heartbeats. I don't intend to waste any of mine."
                            author="Start Bootstrap"
                            date="September 18, 2014"
                        />
                        <hr />
                        <PostPreview
                            title="Science has not yet mastered prophecy"
                            subtitle="We predict too much for the next year and yet far too little for the next ten."
                            author="Start Bootstrap"
                            date="August 24, 2014"
                        />
                        <hr />
                        <PostPreview
                            title="Failure is not an option"
                            subtitle="Many say exploration is part of our destiny, but it’s actually our duty to future generations."
                            author="Start Bootstrap"
                            date="July 8, 2014"
                        />
                        <hr />
                        {/*<!-- Pager -->*/}
                        <ul className="pager">
                            <li className="next">
                                <a href="#">Older Posts &rarr;</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }

}

module.exports = PostList;