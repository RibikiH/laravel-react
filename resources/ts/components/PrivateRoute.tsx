import * as React from 'react';
import { Route, Redirect } from "react-router-dom";

export const PrivateRoute = ({ component: Component, ...rest }: { exact?: true, component: any, path?: string }) => (
    <Route
        {...rest}
        render={(routeProps) =>
            localStorage.getItem('user') ? (
                <Component {...routeProps} />
            ) : (
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: routeProps.location }
                    }}
                />
            )
        }
    />
);
