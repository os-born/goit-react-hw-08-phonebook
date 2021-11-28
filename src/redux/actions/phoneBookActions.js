import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

// const addContactAction = createAction('contacts/addContact', contact => ({
//   payload: { ...contact, id: uuidv4() },
// }));
// const deleteContactAction = createAction('contacts/deleteContact');

const fetchContactsRequest = createAction('contacts/fetchContactsRequest');
const fetchContactsSuccess = createAction('contacts/fetchContactsSuccess');
const fetchContactsError = createAction('contacts/fetchContactsError');

const addContactRequest = createAction('contacts/addContactRequest');
const addContactSuccess = createAction('contacts/addContactSuccess');
const addContactError = createAction('contacts/addContactError');

const deleteContactRequest = createAction('contacts/deleteContactRequest');
const deleteContactSuccess = createAction('contacts/deleteContactSuccess');
const deleteContactError = createAction('contacts/deleteContactError');

const getFilterValueAction = createAction('contacts/setFilterValue');

export {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  // addContactAction,
  // deleteContactAction,
  getFilterValueAction,
};
