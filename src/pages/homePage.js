import React, { Fragment }from 'react';
import { Container,Header,Footer,Main,Spinner } from './homeStyle';
import CommentList from "../components/comment/CommentList";
import Navigation from "../components/general/Navigation";
import { connect } from 'react-redux';
import { APP_MOUNT } from "../redux/actions/actionTypes";
import Post from "../components/post/Post";
import PostEditor from '../components/post/PostEditor';
import PostList from "../components/post/PostList";

class HomePage extends React.Component {

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
                        {/*<CommentList comments={Array(10).fill(0)*/}
                        {/*    .map(() => ({'content':'123'}))}/>*/}
                        <PostList category={'CSS'} posts={Array(5).fill(0)
                            .map((item, index) => ({
                                'title': 'title ' + index,
                                'partial': 'content ' + index,
                            }))}/>
                    </Main>
                    <Footer/>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(HomePage);