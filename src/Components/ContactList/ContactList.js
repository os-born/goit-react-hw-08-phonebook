import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  getContacts,
  deleteContact,
} from '../../redux/operations/contactsOperations';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state =>
    state.contacts.items.filter(item =>
      item.name
        .toLowerCase()
        .trim()
        .includes(state.contacts.filter.toLowerCase().trim()),
    ),
  );

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <ul className={s.contactList}>
      {items.map(({ id, name, number }) => (
        <li key={id} className={s.contactList__item}>
          <p className={s.contactList__itemText}>
            {name}: {number}
          </p>
          <button
            type="button"
            className={s.deleteBtn}
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  items: PropTypes.array,
  onHandleDelete: PropTypes.func,
};

export default ContactList;
