import React from 'react';
import { Card, UserInfo, Function, Content, Img } from './commentStyle';
import { connect } from 'react-redux';

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
                    <button>reply</button>
                    <button>edit</button>
                    <button>delete</button>
                </Function>
            </Card>
        )
    }
}

export default connect()(Comment);