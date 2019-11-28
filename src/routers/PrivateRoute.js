import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

function PrivateRoute({ component: Component, current_user, ...rest}) {
    return (
        <Route {...rest} render={(props) =>
            (current_user === null)
            ? (<Component {...props}/>)
            : (<Redirect to={"/login"}/>)}
         />
    )
}

function mapStateToProps(state) {
    return { current_user: state.auth.current_user };
}

export default connect(mapStateToProps)(PrivateRoute);