import { createSlice } from '@reduxjs/toolkit';

import {
  addContact,
  deleteContact,
  editContact,
  fetchContacts,
} from './operations';

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

const pending = state => {
  state.contacts.isLoading = true;
};
const rejected = (state, action) => {
  state.contacts.isLoading = false;
  state.contacts.error = action.payload;
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    setContactId(state, action) {
      state.contactId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const gender = () => (Math.random() > 0.5 ? 'male' : 'female');
        state.contacts.items = payload.map(contact => ({
          ...contact,
          gender: gender(),
        }));
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        state.contacts.items = state.contacts.items.filter(
          contact => contact.id !== payload.id
        );
      })
      .addCase(editContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;
        const index = state.contacts.items.findIndex(
          contact => contact.id === payload.id
        );
        state.contacts.items.splice(index, 1, payload);
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.contacts.isLoading = false;
        state.contacts.error = null;

        state.contacts.items.push(payload);
      })
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.rejected, rejected)
      .addCase(editContact.pending, pending)
      .addCase(editContact.rejected, rejected)
      .addCase(addContact.pending, pending)
      .addCase(addContact.rejected, rejected);
  },
});
export const { setFilter, setContactId } = contactsSlice.actions;
