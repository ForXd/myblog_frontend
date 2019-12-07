import React from 'react';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import PostPage from './pages/postPage';
import UserPage from './pages/userPage';
import SignupPage from './pages/signupPage';
import { Router, Route, Switch} from 'react-router-dom';
import history from "./routers/history";
import PrivateRoute from "./routers/PrivateRoute";
import './App.css'
import {APP_MOUNT} from "./redux/actions/actionTypes";
import { connect } from 'react-redux';

class App extends React.Component {
  componentDidMount() {
    this.props.dispatch({type: APP_MOUNT})
  }

  render() {
    return (
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route path={"/login"} component={LoginPage}/>
            <Route path={"/signup"} component={SignupPage}/>
            <Route path={"/post"} component={PostPage}/>
            <PrivateRoute path={"/user"} component={UserPage}/>
          </Switch>
        </Router>
    );
  }
}

export default connect()(App);
