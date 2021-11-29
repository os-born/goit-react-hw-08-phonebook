import { createSelector } from '@reduxjs/toolkit';

export const getAllContacts = state => state.contacts.items;

export const getFilter = state => state.contacts.filter;

export const getLoading = state => state.contacts.loading;

export const getError = state => state.contacts.error;

// export const getContactList = state => {
//   const allContacts = getAllContacts(state);
//   const filter = getFilter(state);
//   const normalizedFilter = filter.toLowerCase().trim();
//   return allContacts.filter(item =>
//     item.name.toLowerCase().trim().includes(normalizedFilter),
//   );
// };

export const getContactList = createSelector(
  [getAllContacts, getFilter],
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase().trim();
    return contacts.filter(item =>
      item.name.toLowerCase().trim().includes(normalizedFilter),
    );
  },
);
