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
        postAgent.mdDetail(16).then(res => {
            console.log(res);
            console.log(res);
            this.setState(res)
        });
    }

    render() {
        return (
            <Container>
                <Contents dangerouslySetInnerHTML={{ __html: this.state.toc }} />
                <Content dangerouslySetInnerHTML={{ __html: this.state.md }} />
                <Up>A</Up>
            </Container>
      );
    }
}

export default Post;