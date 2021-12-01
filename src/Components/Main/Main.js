import React from 'react';
import mainRoutes from '../../routes/mainRoutes';
import Content from '../contentNavigation/Content';

const Main = () => {
  return <Content routes={mainRoutes} />;
};

export default Main;
