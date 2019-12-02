import ReactMarkdown from "react-markdown";
import React from 'react';
import  { Container, Content, Contents, Up } from './postStyle';

const input = '[TOC]\n# jjj \n# asdf\n # sdaf';
class Post extends React.Component {

    renderToc = (items) => { // 递归 render
        return items.map(item => (
            <a key={item.anchor} href={`#${item.anchor}`} title={item.text}>
                {item.children && this.renderToc(item.children)}
            </a>
        ));
    }
    render() {
        return (
            <Container>
                <Contents>
                    {}
                </Contents>
                <Content>
                    <ReactMarkdown
                        source={input}
                    />
                </Content>
                <Up>A</Up>
            </Container>
      );
    }
}

export default Post;