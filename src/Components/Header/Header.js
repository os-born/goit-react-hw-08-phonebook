import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import mainRoutes from '../../routes/mainRoutes';
import Navigation from './navigation/Navigation';
import s from './Header.module.css';
import { MdOutlineContactPhone } from 'react-icons/md';
import UserMenu from '../Header/UserMenu/UserMenu';
import * as authSelectors from '../../redux/auth/selectors/authSelectors';

const Header = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <header className={s.header}>
      <Link
        to={mainRoutes[0].path}
        exact={mainRoutes[0].exact}
        className={s.logo}
      >
        <MdOutlineContactPhone />
      </Link>
      <Navigation routes={mainRoutes} />
      {isLoggedIn && <UserMenu />}
    </header>
  );
};

export default Header;
