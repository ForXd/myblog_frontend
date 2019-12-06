import React from 'react';
import  { Container, Content, Contents, Up } from './postStyle';
import postAgent from "../../agents/postAgent";
import { generateToc } from "./generateToc";
import { Anchor } from "antd";
const { Link } = Anchor;

class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        }

    }

    componentDidMount() {
        postAgent.mdDetail(17).then(res => {
            this.setState(res);
            this.state.toc = generateToc(this.state.toc);
            console.log(this.state.toc)
        });
    }

    render() {
        return (
            <Container>
                <Contents>
                    <Anchor><Link href="#title1" title="title1"><Link href="#1-1" title="1-1"/></Link><Link href="#title2" title="title2"><Link href="#2-1" title="2-1"><Link href="#2-1-1" title="2-1-1"><Link href="#2-1-1-1" title="2-1-1-1"/></Link></Link></Link></Anchor>

                </Contents>
                {/*<Contents dangerouslySetInnerHTML={{ __html: this.state.toc }} />*/}
                {/*<Content dangerouslySetInnerHTML={{ __html: this.state.md }} />*/}
                <Up>A</Up>
            </Container>
      );
    }
}

export default Post;