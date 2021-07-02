import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

function PublicRoute({ component: Component, ...rest }) {

    const userState = useSelector(userSelector);

    return (
        <Route {...rest} render={props => (
            userState.isAuthenticated ? 
                <Redirect to={userState.user.role === 'admin' ? '/admin' : `/${userState.user.first_name}.${userState.user.last_name}/dashboard`} />
                : <Component {...props} />
        )} />
    );
}

export default PublicRoute;
