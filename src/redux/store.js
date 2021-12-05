import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/reducers/authReducers';
import phoneBookReducer from './contacts/reducers/phoneBookReducers';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: phoneBookReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'auth/registerRequest',
          'auth/registerSuccess',
          'auth/registerError',
          'auth/loginRequest',
          'auth/loginSuccess',
          'auth/loginError',
          'auth/logoutRequest',
          'auth/logoutSuccess',
          'auth/logoutError',
          'auth/getCurrentUserRequest',
          'auth/getCurrentUserSuccess',
          'auth/getCurrentUserError',
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
          persistStore,
          persistReducer,
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

export const persistor = persistStore(store);
