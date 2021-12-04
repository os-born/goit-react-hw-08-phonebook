import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/authActions';

const initialState = { name: null, email: null };

const user = createReducer(initialState, {
  [actions.registerSuccess]: (_, { payload }) => payload.user,
  [actions.loginSuccess]: (_, { payload }) => payload.user,
  [actions.logoutSuccess]: () => initialState,
  [actions.getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
  [actions.registerSuccess]: (_, { payload }) => payload.token,
  [actions.loginSuccess]: (_, { payload }) => payload.token,
  [actions.logoutSuccess]: () => null,
});

const isLoggedIn = createReducer(false, {
  [actions.registerSuccess]: () => true,
  [actions.loginSuccess]: () => true,
  [actions.getCurrentUserSuccess]: () => true,
  [actions.logoutSuccess]: () => false,
  [actions.registerError]: () => false,
  [actions.loginError]: () => false,
  [actions.getCurrentUserError]: () => false,
});

const error = createReducer(null, {
  [actions.registerError]: (_, { payload }) => payload,
  [actions.loginError]: (_, { payload }) => payload,
  [actions.logoutError]: (_, { payload }) => payload,
  [actions.getCurrentUserError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user,
  token,
  isLoggedIn,
  error,
});

export default authReducer;
