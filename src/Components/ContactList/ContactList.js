import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchContacts,
  deleteContact,
} from '../../redux/operations/contactsOperations';
import * as selectors from '../../redux/selectors/phoneBookSelectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => selectors.getContactList(state));
  const isLoading = useSelector(state => selectors.getLoading(state));
  const error = useSelector(state => selectors.getError(state));

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading ...</p>}
      {error && <p>{' Sorry, something wrong: ' + error}</p>}
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
    </>
  );
};

ContactList.propTypes = {
  items: PropTypes.array,
  onHandleDelete: PropTypes.func,
};

export default ContactList;
