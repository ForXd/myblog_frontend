import React from 'react';
import { Card } from './cardStyle';

class PostCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <div> { this.props.post.title }</div>
                <div> { this.props.post.partial }</div>
                <div> { this.props.post.postTime }</div>
            </Card>
        );
    }
}

export default PostCard;