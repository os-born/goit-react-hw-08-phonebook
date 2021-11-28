// import { createStore } from 'redux';
// import {
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
import { configureStore /*getDefaultMiddleware*/ } from '@reduxjs/toolkit';
import phoneBookReducers from './reducers/phoneBookReducers';
// import { composeWithDevTools } from 'redux-devtools-extension';
// import rootReducer from './rootReducer';

// const middleware = [
//   ...getDefaultMiddleware({
//     serializableCheck: {
//       ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//     },
//   }),
// ];

export const store = configureStore({
  reducer: {
    contacts: phoneBookReducers,
  },
  // middleware,
  devTools: process.env.NODE_ENV === 'development',
});
