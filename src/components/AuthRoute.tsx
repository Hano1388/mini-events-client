// import React, { Component } from 'react';
// import { Route, Redirect, RouteComponentProps } from 'react-router-dom';

// interface IProps extends RouteComponentProps {
//     isAuthenticated: boolean;
//     component: React.FC<RouteComponentProps>;
//     path: string;
// }

// export const AuthRoute: React.FC<IProps> = props => {
//     const { isAuthenticated, component: Component, ...routeProps } = props;

//     if (!isAuthenticated) {
//         return <Redirect to="/sign_in" />;
//     } else {
//         return <Route {...routeProps} component={Component} />
//     }
// }

import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router';

export interface AuthRouteProps extends RouteProps {
    isAuthenticated: boolean;
    restrictedPath: string;
    authenticationPath: string;
}



export const AuthRoute: React.FC<AuthRouteProps> = props => {
    const { isAuthenticated, component: Component, authenticationPath, ...routeProps } = props;

    if (!isAuthenticated) {
        return <Redirect to={{ pathname: authenticationPath }} />;
    } else {
        return <Route {...routeProps} component={Component} />
    }
};

export default AuthRoute;