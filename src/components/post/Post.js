import React from 'react';
import  { Container, Content, Contents, Up } from './postStyle';
import postAgent from "../../agents/postAgent";

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }
    componentDidMount() {
        postAgent.mdDetail(10).then(res => {
            console.log(res);
            console.log(res);
            this.setState(res)
        });
    }

    render() {
        return (
            <Container>
                <Contents>
                    ?
                </Contents>
                <Content>
                    ?
                    {this.state.md}
                </Content>
                <Up>A</Up>
            </Container>
      );
    }
}

export default Post;