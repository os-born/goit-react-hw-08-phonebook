import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './NavigationItem.module.css';

const NavigationItem = ({ name, path, exact }) => {
  return (
    <li className={s.navListItem}>
      <NavLink
        to={path}
        exact={exact}
        className={s.navItemLink}
        activeClassName={s.navItemLinkActive}
      >
        {name}
      </NavLink>
    </li>
  );
};

export default NavigationItem;
