import React from 'react';
import { Link } from 'react-router-dom';
import mainRoutes from '../../routes/mainRoutes';
import Navigation from './navigation/Navigation';
import s from './Header.module.css';
import { MdOutlineContactPhone } from 'react-icons/md';
import UserMenu from '../UserMenu/UserMenu';

const Header = () => {
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
      <UserMenu />
    </header>
  );
};

export default Header;
