import React from 'react';
import LoginPage from './pages/loginPage';
import HomePage from './pages/homePage';
import PostPage from './pages/postPage';
import UserPage from './pages/userPage';
import SignupPage from './pages/signupPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { store, history } from "./redux/store";
import PrivateRoute from "./routers/PrivateRoute";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Switch>
            <Route exact path={"/"} component={HomePage}/>
            <Route path={"/login"} component={LoginPage}/>
            <Route path={"/signup"} component={SignupPage}/>
            <Route path={"/posts"} component={PostPage}/>
            <PrivateRoute path={"/user/:id"} component={UserPage}/>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
