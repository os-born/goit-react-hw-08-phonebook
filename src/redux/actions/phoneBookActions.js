import { createAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const addContactAction = createAction('contacts/addContact', contact => ({
  payload: { ...contact, id: uuidv4() },
}));

const deleteContactAction = createAction('contacts/deleteContact');

const getFilterValueAction = createAction('contacts/setFilterValue');

export { addContactAction, deleteContactAction, getFilterValueAction };
