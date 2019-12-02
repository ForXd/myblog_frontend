import React from 'react';
import authAgent from '../agents/authAgent';
import { connect } from 'react-redux';
import { LOGIN_START, LOGIN_END } from "../redux/actions/actionTypes";
import {Link} from "react-router-dom";
import ListErrors from "../components/general/ListErrors";
import { Card, Logo, Form, Input, Button, Container } from './authStyle';
import history from "../routers/history";

const mapStateToProps = state => ({ ...state.auth });

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username:'',
            password:''
        }
    }
    // 箭头函数自动bind类的this
    login = () => {
        console.log(this.props.location.previousLink)
        this.props.dispatch({type: LOGIN_START});
        authAgent.login(this.state.username, this.state.password).then(
            res => {
                console.log(res)
               if (res.success === 1) {
                   this.props.dispatch({type: LOGIN_END, payload:{
                           username: this.state.username,
                           token: res.token
                       }})
                   // go to the previous page user want to go
                   if (this.props.location.previousLink) {
                       history.push(this.props.location.previousLink);
                   } else {
                       history.push('/');
                   }
               } else {
               // to do some alert
               }
            }
        );
    }

    render() {
        return (
            <Container>
                <Card>
                    <h1>Sign in</h1>
                    <Form>
                        <Input type="text"
                               placeholder="username"
                               onChange={e => {
                                   this.setState({username: e.target.value})
                               }}
                               value={this.state.username} />
                        <Input type="password"
                               placeholder="password"
                               onChange={e => {
                                   this.setState({password: e.target.value})
                               }}
                               value={this.state.password} />
                        <Button onClick={this.login}>Sign In</Button>
                        { this.props.is_waiting &&
                        <div>
                            ...
                            <div>dsf</div>
                        </div> }
                    </Form>
                    <Link to="/signup">Don't have an account?</Link>
                </Card>
            </Container>
        )
    }
}

export default connect(mapStateToProps)(Login);