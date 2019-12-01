import React from 'react';
import { Container,Header,Footer,Main,Spinner } from './homeStyle';
import Comment from "../components/comment/Comment";
import CommentList from "../components/comment/CommentList";
import Navigation from "../components/general/Navigation";

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <h1>Home Page</h1>
                </Header>
                <Main>
                    <Navigation></Navigation>
                    <CommentList comments={Array(10).fill(0)
                        .map(() => ({'content':'123'}))}/>
                </Main>
                <Footer/>
            </Container>
        )
    }
}
export default HomePage;