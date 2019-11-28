import React from 'react';
import { Container,Header,Footer,Sidebar,Main,Spinner } from './homeStyle';
class HomePage extends React.Component {
    render() {
        return (
            <Container>
                <Header>
                    <h1>Home Page</h1>
                </Header>
                <Sidebar/>
                <Main/>
                <Footer/>
            </Container>
        )
    }
}
export default HomePage;