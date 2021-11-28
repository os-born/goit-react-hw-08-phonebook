import { configureStore } from '@reduxjs/toolkit';
import phoneBookReducers from './reducers/phoneBookReducers';

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducers,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'contacts/fetchContactsRequest',
          'contacts/fetchContactsSuccess',
          'contacts/fetchContactsError',
          'contacts/addContactRequest',
          'contacts/addContactSuccess',
          'contacts/addContactError',
          'contacts/deleteContactRequest',
          'contacts/deleteContactSuccess',
          'contacts/deleteContactError',
          'contacts/setFilterValue',
        ],
      },
    }),
});
