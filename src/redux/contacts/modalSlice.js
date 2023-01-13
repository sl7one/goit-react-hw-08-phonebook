import { createSlice } from '@reduxjs/toolkit';
import { addContact, editContact } from './operations';

const initialState = {
  modal: false,
  editForm: false,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showModal(state) {
      state.modal = true;
    },
    closeModal(state) {
      state.modal = false;
    },
    showEditForm(state) {
      state.editForm = true;
    },
    closeEditForm(state) {
      state.editForm = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(addContact.fulfilled, state => {
        state.modal = false;
      })
      .addCase(editContact.fulfilled, state => {
        state.modal = false;
      });
  },
});
export const { showModal, closeModal, showEditForm, closeEditForm } =
  modalSlice.actions;
