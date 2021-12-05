import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({ path, exact, component, isRestricted, isLoggedIn }) => {
  return isLoggedIn && isRestricted ? (
    <Redirect to="/contacts" />
  ) : (
    <Route path={path} exact={exact} component={component} />
  );
};

export default PublicRoute;
