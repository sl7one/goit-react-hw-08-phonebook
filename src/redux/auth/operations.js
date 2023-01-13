import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const tokenService = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const userRegistration = createAsyncThunk(
  'user/registration',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`/users/signup`, user);
      tokenService.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogIn = createAsyncThunk(
  'user/LogIn',
  async (user, thunkAPI) => {
    try {
      const response = await axios.post(`/users/login`, user);
      tokenService.set(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userLogOut = createAsyncThunk(
  'user/LogOut',
  async (_, thunkAPI) => {
    try {
      console.log('token', axios.defaults.headers.common.Authorization);
      const response = await axios.post(`/users/logout`);

      tokenService.unset();
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const userGet = createAsyncThunk('user/Get', async (_, thunkAPI) => {
  try {
    tokenService.set(thunkAPI.getState().auhtSate.token);
    const response = await axios.get(`/users/current`);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});
