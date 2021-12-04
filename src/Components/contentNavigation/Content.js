import React from 'react';
import { Route, Switch } from 'react-router';

const Content = ({ routes }) => {
  return (
    <Switch>
      {routes.map(({ path, component }) => (
        <Route key={path} path={path} exact component={component} />
      ))}
    </Switch>
  );
};

export default Content;
