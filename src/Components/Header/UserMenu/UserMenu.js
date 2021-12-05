import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as authSelectors from '../../../redux/auth/selectors/authSelectors';
import * as authOperations from '../../../redux/auth/operations/authOperations';
import s from './UserMenu.module.css';
import default_avatar from './profile-icon-vector.svg';

const UserMenu = () => {
  const userEmail = useSelector(authSelectors.getUserEmail);
  const dispatch = useDispatch();
  return (
    <div className={s.container}>
      <img src={default_avatar} alt="avatar" width="40" className={s.avatar} />
      <span className={s.name}>Welcome, {userEmail}</span>
      <button type="button" onClick={() => dispatch(authOperations.logout())}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
