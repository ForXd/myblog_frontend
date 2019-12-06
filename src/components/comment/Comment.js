import React from 'react';
import { Card, UserInfo, Function, Content } from './commentStyle';
import { connect } from 'react-redux';
import { Avatar } from "antd";

class Comment extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card>
                <UserInfo>
                    <Avatar src={"./logo192.png"}/>
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