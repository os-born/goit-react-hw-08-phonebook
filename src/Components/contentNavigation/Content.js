import React from 'react';
import { Switch } from 'react-router';
import { getIsLoggedIn } from '../../redux/auth/selectors/authSelectors';
import { useSelector } from 'react-redux';
import PrivateRoute from '../PrivateRoute';
import PublicRoute from '../PublicRoute';

const Content = ({ routes }) => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Switch>
      {routes.map(route =>
        route.isPrivate ? (
          <PrivateRoute {...route} isLoggedIn={isLoggedIn} key={route.path} />
        ) : (
          <PublicRoute {...route} isLoggedIn={isLoggedIn} key={route.path} />
        ),
      )}
    </Switch>
  );
};

export default Content;
