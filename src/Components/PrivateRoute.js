import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({ path, exact, component, isLoggedIn }) => {
  return isLoggedIn ? (
    <Route path={path} exact={exact} component={component} />
  ) : (
    <Redirect to="/login" />
  );
};

export default PrivateRoute;
