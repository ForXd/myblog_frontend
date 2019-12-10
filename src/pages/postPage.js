import React, { Fragment } from 'react';
import Post from "../components/post/Post";
import Navigation from "../components/general/Navigation";
import CommentList from "../components/comment/CommentList";
import { connect } from 'react-redux';
import { fetchComments } from '../redux/actions/commentAction';
import postAgent from "../agents/postAgent";


class PostPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            post: null
        }
    }
    componentDidMount() {
        postAgent.detail(18).then(res => {
            console.log(res);
            this.props.dispatch(fetchComments(res.post_comments));
            this.setState({post:res});
        });
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                {this.state.post && <Post post={this.state.post}/>}
                {this.props.items && <CommentList comments={this.props.items}/>}
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return state.comments;
}
export default connect(mapStateToProps)(PostPage);