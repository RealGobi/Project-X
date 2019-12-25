import react from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest} 
    render={props => ( fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to="/login" />
    )}
  />
);
