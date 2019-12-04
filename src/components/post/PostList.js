import React from 'react';
import PostCard from './PostCard'
import { Container, Category } from "./listStyle";

class PostList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Category>{this.props.category}</Category>
                <Container>
                    {
                        this.props.posts.map((item, index) => (
                            <PostCard post={item}/>
                        ))
                    }
                </Container>
            </div>
        );
    }
}

export default PostList;