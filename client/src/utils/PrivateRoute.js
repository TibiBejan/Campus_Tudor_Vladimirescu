import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux/userSlice';

export const PrivateRoute = ({ component: Component, role, ...rest }) => {
    const userState = useSelector(userSelector);
    if(!userState.isAuthenticated) {
        return <Redirect to={{ pathname: '/login' }} />
    }
    return <Route {...rest} render={props => {
        if (Object.keys(userState.user).length === 0 || !userState.user) {
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }
        if (role && (role !== userState.user.role)) {
            return <Redirect to={{ pathname: '/'}} />
        }
        return <Component {...props} />
    }}/>
};

export default PrivateRoute;
