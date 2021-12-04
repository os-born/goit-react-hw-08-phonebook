import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducers/authReducers';
import phoneBookReducer from './contacts/reducers/phoneBookReducers';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    contacts: phoneBookReducer,
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
