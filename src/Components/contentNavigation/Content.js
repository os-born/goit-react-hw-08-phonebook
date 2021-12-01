import React from 'react';
import { Route, Switch } from 'react-router';

const Content = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, exact, component }) => (
        <Route path={path} exact={exact} component={component} />
      ))}
    </Switch>
  );
};

export default Content;
