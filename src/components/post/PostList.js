import React from 'react';
import PostCard from './PostCard'
import { Container } from "./listStyle";

class PostList extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    {
                        this.props.posts
                        && this.props.posts.map((item, index) => (
                            <PostCard key={item.id} post={item}/>
                        ))
                    }
                </Container>
            </div>
        );
    }
}

export default PostList;