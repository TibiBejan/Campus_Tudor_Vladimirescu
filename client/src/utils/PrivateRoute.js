import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

export const PrivateRoute = ({ component: Component, role, ...rest }) => {

    // SLICE OF STATE
    const userState = useSelector(userSelector);

    if(!userState.isAuthenticated) {
        return <p>Loading...</p>
    }

    return <Route {...rest} render={props => {
        if (!userState.user) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // check if route is restricted by role
        if (role && (role !== userState.user.role)) {
            // role not authorised so redirect to home page
            return <Redirect to={{ pathname: '/'}} />
        }

        // authorised so return component
        return <Component {...props} />
    }}/>
};

export default PrivateRoute;
