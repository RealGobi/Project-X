import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export default function ProtectedRoutes(isAuthenticated) {
  // Protected Routes - you need to be authenticated to reach this routes
  const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/" />
      )}
    />
  );
  return (
    <ProtectedRoute />
  );
}
