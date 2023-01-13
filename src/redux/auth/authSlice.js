import { createSlice } from '@reduxjs/toolkit';
import { userGet, userLogIn, userLogOut, userRegistration } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: null,
};

const rejected = (state, { payload }) => {
  state.error = payload.error;
  state.isLoading = false;
};
const pending = state => {
  state.isLoading = true;
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(userRegistration.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(userLogIn.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.error = null;
        state.isLoading = false;
      })
      .addCase(userLogOut.fulfilled, (state, { payload }) => {
        return initialState;
      })
      .addCase(userGet.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(userRegistration.rejected, rejected)
      .addCase(userRegistration.pending, pending)
      .addCase(userLogIn.rejected, rejected)
      .addCase(userLogIn.pending, pending)
      .addCase(userGet.rejected, rejected)
      .addCase(userGet.pending, pending)
      .addCase(userLogOut.rejected, rejected)
      .addCase(userLogOut.pending, pending);
  },
});
