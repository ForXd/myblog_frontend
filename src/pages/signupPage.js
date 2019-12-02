import React from 'react';
import { connect } from 'react-redux';
import { Card, Logo, Form, Input, Button, Container } from './authStyle';
import { SIGNUP_START, SIGNUP_END } from '../redux/actions/actionTypes';
import { Link } from "react-router-dom";
import authAgent from "../agents/authAgent";


class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            password_confirm: ''
        }
    }

    signUp = () => {
        if (this.state.password !== this.state.password_confirm) {
            alert('confirm your password again');
        } else {
            this.props.dispatch({type: SIGNUP_START});
            authAgent.register(this.state.username,
                this.state.password).then(
                (res) => {
                    if (res.success === 1) {
                        this.props.dispatch({type: SIGNUP_END, payload:{
                                username: this.state.username,
                                token: res.token
                            }})
                        // go to the previous page user want to go
                        this.props.history.push('/login');
                    } else {
                        // do some alert
                    }
                }
            );
        }
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Sign Up</h1>
                    <Form>
                        <Input type="text"
                               placeholder="username"
                               value={this.state.username}
                               onChange={e => {
                                   this.setState({username: e.target.value});
                               }}/>
                        <Input type="password"
                               placeholder="password"
                               value={this.state.password}
                               onChange={e => {
                                   this.setState({password: e.target.value});
                               }}/>
                        <Input type="password"
                               placeholder="password again"
                               value={this.state.password_confirm}
                               onChange={e => {
                                   this.setState({password_confirm: e.target.value});
                               }}/>
                        <Button onClick={this.signUp}>Sign Up</Button>
                    </Form>
                    <Link to="/login">Already have an account?</Link>
                </Card>
            </Container>
        )
    }
}

export default connect()(Signup);