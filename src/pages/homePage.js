import React from 'react';
import { Container,Header,Footer,Sidebar,Main,Spinner } from './homeStyle';
import Comment from "../components/comment/Comment";

class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <h1>Home Page</h1>
                </Header>
                <Sidebar/>
                <Main>
                    <Comment comment={{'content':'123'}}/>
                </Main>
                <Footer/>
            </Container>
        )
    }
}
export default HomePage;