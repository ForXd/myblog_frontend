import React, {Fragment} from 'react';
import { Container, Content, Contents, Up } from './postStyle';
import postAgent from "../../agents/postAgent";
import { generateToc } from "./generateToc";
import { Anchor } from "antd";
import { BackTop } from "antd";
import marked from 'marked';
import hljs from 'highlight.js';
import JsxParser from 'react-jsx-parser';
import CommentList from "../comment/CommentList";

const renderer = new marked.Renderer();
renderer.heading = function(text, level, raw) {
    return `<a id="${text}" href="#${text}"><h${level}>${text}</h${level}></a>\n`;
};
const { Link } = Anchor;


class Post extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            affix: true,
            lastLink: '',
            toc: ''
        }
    }

    componentDidMount() {
        if (this.props.post.content) {
            const resVal = generateToc(this.props.post.content);
            this.setState({toc: resVal[0]});
            this.setState({lastLink: resVal[1]});
        }


        marked.setOptions({
            renderer: renderer,
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: true,
            smartLists: true,
            smartypants: false,
            highlight: function(code) {
                return hljs.highlightAuto(code).value;
            },
        });
    }

    onChange = link => {
        if (link === this.state.lastLink) {
            this.setState({affix: false})
        } else {
            this.setState({affix: true})
        }
    };

    render() {
        return (
            <Container>
                <Contents>
                    <Anchor onChange={this.onChange}
                            affix={this.state.affix}
                            targetOffset={window.innerHeight/2}
                    >
                        <JsxParser components={{Link}} jsx={this.state.toc}/>
                    </Anchor>
                </Contents>
                <Content dangerouslySetInnerHTML={{ __html: this.props.post.content
                        ? marked(this.props.post.content)
                        : null }} />
                <Up><BackTop/></Up>
            </Container>
      );
    }
}

export default Post;

