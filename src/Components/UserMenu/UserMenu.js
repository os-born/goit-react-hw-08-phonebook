import React from 'react';
import s from './UserMenu.module.css';
import default_avatar from './account_circle_black_24dp.svg';
import * as authSelectors from '../../redux/auth/selectors/authSelectors';
import { useSelector } from 'react-redux';

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  return (
    <div className={s.container}>
      <img src={default_avatar} alt="avatar" width="40" className={s.avatar} />
      <span className={s.name}>Welcome, {userEmail}</span>
      <button
        type="button" /*onClick={() => dispatch(authOperations.logOut())}*/
      >
        Выйти
      </button>
    </div>
  );
};

export default UserMenu;
