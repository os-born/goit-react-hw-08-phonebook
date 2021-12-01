import React from 'react';
// import { Link } from 'react-router-dom';
import NavigationItem from './navigationItem/NavigationItem';
import s from './Navigation.module.css';

const Navigation = ({ routes }) => {
  return (
    <nav>
      <ul className={s.navList}>
        {routes.map(({ name, path, exact }) => (
          <NavigationItem name={name} path={path} exact={exact} />
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
