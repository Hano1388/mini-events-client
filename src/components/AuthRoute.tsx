import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface AuthRouteProps extends RouteProps {
    isAuthenticated: boolean;
    redirectPath: string;
    currentUser?: IUser | null;
}



export const AuthRoute: React.FC<AuthRouteProps> = (props) => {
    const { isAuthenticated, component: Component, redirectPath, ...routeProps } = props;
    console.log('authRouteProps: ', props);

    if (!isAuthenticated) {
        return <Redirect to={{ pathname: redirectPath }} />;
    } else {
        return <Route {...routeProps} component={Component} />
    }

};

export default AuthRoute;


