import React, { Fragment }from 'react';
import { Container,Header,Footer,Main,Spinner } from './homeStyle';
import CommentList from "../components/comment/CommentList";
import Navigation from "../components/general/Navigation";
import { connect } from 'react-redux';
import { APP_MOUNT } from "../redux/actions/actionTypes";
import Post from "../components/post/Post";

class HomePage extends React.Component {
    componentDidMount() {
        this.props.dispatch({type: APP_MOUNT});
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
                        <CommentList comments={Array(10).fill(0)
                            .map(() => ({'content':'123'}))}/>
                    </Main>
                    <Footer/>
                </Container>
            </Fragment>
        )
    }
}

export default connect()(HomePage);