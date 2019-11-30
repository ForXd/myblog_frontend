import React from 'react';
import { Card, UserInfo, Function, Content, Img } from './commentStyle';

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <UserInfo>
                    <Img src={"./logo192.png"}/>
                    <span>name</span>
                </UserInfo>
                <Content>
                    { this.props.comment.content }
                </Content>
                <Function>
                    <button>edit</button>
                    <button>delete</button>
                </Function>
            </Card>
        )
    }
}

export default Comment;