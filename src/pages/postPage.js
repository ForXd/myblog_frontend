import React, { Fragment } from 'react';
import Post from "../components/post/Post";
import Navigation from "../components/general/Navigation";

class PostPage extends React.Component {
    render() {
        return (
            <Fragment>
                <Navigation/>
                <Post/>
            </Fragment>
        )
    }
}
export default PostPage;