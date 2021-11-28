import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/phoneBookActions';

const itemsReducer = createReducer([], {
  [actions.fetchContactsRequest]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (state, { payload }) => [...state, payload],
  [actions.deleteContactSuccess]: (state, { payload }) => [
    ...state.filter(({ id }) => id !== payload),
  ],
});

const loading = createReducer(false, {
  [actions.fetchContactsRequest]: () => true,
  [actions.fetchContactsSuccess]: () => false,
  [actions.fetchContactsError]: () => false,
  [actions.addContactRequest]: () => true,
  [actions.addContactSuccess]: () => false,
  [actions.addContactError]: () => false,
  [actions.deleteContactRequest]: () => true,
  [actions.deleteContactSuccess]: () => false,
  [actions.deleteContactError]: () => false,
});

const filterReducer = createReducer('', {
  [actions.getFilterValueAction]: (_, { payload }) => payload,
});

const error = createReducer(null, {});

const phoneBookReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
  loading,
  error,
});

export default phoneBookReducers;
