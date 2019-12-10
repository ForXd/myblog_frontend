import React from 'react';
import Comment from "./Comment";

class CommentList extends React.Component {
    render() {
        return (
            this.props.comments.map((item, index) => (
                <Comment key={item.id} comment={item}/>
            ))
        )
    }
}

export default CommentList;