import { combineReducers, createReducer } from '@reduxjs/toolkit';
import * as actions from '../actions/phoneBookActions';

const itemsReducer = createReducer([], {
  [actions.addContactAction]: (state, { payload }) => [...state, payload],
  [actions.deleteContactAction]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload),
  ],
});
const filterReducer = createReducer('', {
  [actions.getFilterValueAction]: (_, { payload }) => payload,
});

const phoneBookReducers = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});

export default phoneBookReducers;
