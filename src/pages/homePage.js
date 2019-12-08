import React, { Fragment }from 'react';
import { Container,Header,Footer,Main,Spinner } from './homeStyle';
import CommentList from "../components/comment/CommentList";
import Navigation from "../components/general/Navigation";
import { connect } from 'react-redux';
import { fetchPosts } from "../redux/actions/postAction";
import Post from "../components/post/Post";
import PostEditor from '../components/post/PostEditor';
import PostList from "../components/post/PostList";

class HomePage extends React.Component {

    componentDidMount() {
        this.props.dispatch(fetchPosts(1));
    }

    render() {
        return (
            <Fragment>
                <Navigation/>
                <Container>
                    <Header>
                        <h1>Home Page</h1>
                    </Header>
                    <Main>
                        <Post/>
                        <PostList posts={this.props.items}/>
                    </Main>
                    <Footer/>
                </Container>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return state.posts;
}

export default connect(mapStateToProps)(HomePage);