import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import * as authSelectors from '../../../../redux/auth/selectors/authSelectors';
import s from './NavigationItem.module.css';

const NavigationItem = ({
  name,
  path,
  exact = true,
  isPrivate,
  isRestricted,
}) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <>
      {((!isPrivate && !isRestricted) ||
        (isPrivate && !isRestricted && isLoggedIn) ||
        (!isLoggedIn && !isPrivate && isRestricted)) && (
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
      )}
    </>
  );
};

export default NavigationItem;
