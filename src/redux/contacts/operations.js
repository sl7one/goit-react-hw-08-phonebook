import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const contacts = axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});

const tokenService = {
  set(token) {
    contacts.defaults.headers.common.Authorization = token;
  },
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auhtSate.token;
      tokenService.set(token);
      const response = await contacts.get('/contacts');

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contact/delete',
  async (id, thunkAPI) => {
    try {
      const response = await contacts.delete(`/contacts/${id}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const editContact = createAsyncThunk(
  'contact/edit',
  async (contact, thunkAPI) => {
    const { name, number, id } = contact;
    try {
      const response = await contacts.patch(`/contacts/${id}`, {
        name,
        number,
      });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contact/add',
  async (contact, thunkAPI) => {
    try {
      const response = await contacts.post(`/contacts`, contact);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

// const fakeContacts = [
//   {
//     createdAt: '2023-01-08T11:08:13.679Z',
//     name: 'Laverna',
//     phone: '263-981-7164',
//     gender: 'female',
//     id: '8',
//   },
//   {
//     createdAt: '2023-01-08T13:30:24.870Z',
//     name: 'Jovanny',
//     phone: '477-225-8181',
//     gender: 'male',
//     id: '10',
//   },
//   {
//     createdAt: '2023-01-08T08:26:01.351Z',
//     name: 'Micheal',
//     phone: '748-357-7412',
//     gender: 'female',
//     id: '11',
//   },
//   {
//     createdAt: '2023-01-07T14:49:13.596Z',
//     name: 'Melisa',
//     phone: '261-226-4267',
//     gender: 'female',
//     id: '12',
//   },
//   {
//     createdAt: '2023-01-08T10:57:24.423Z',
//     name: 'Emanuel',
//     phone: '943-332-6011',
//     gender: 'male',
//     id: '13',
//   },
//   {
//     createdAt: '2023-01-07T15:48:03.193Z',
//     name: 'Tristian',
//     phone: '631-273-9031',
//     gender: 'female',
//     id: '14',
//   },
//   {
//     createdAt: '2023-01-07T17:12:11.181Z',
//     name: 'Izaiah',
//     phone: '895-635-1740',
//     gender: 'female',
//     id: '15',
//   },
//   {
//     createdAt: '2023-01-07T16:03:27.413Z',
//     name: 'Adelbert',
//     phone: '564-596-7888',
//     gender: 'male',
//     id: '16',
//   },
//   {
//     createdAt: '2023-01-07T16:27:15.793Z',
//     name: 'Lincoln',
//     phone: '648-574-3629',
//     gender: 'male',
//     id: '18',
//   },
//   {
//     createdAt: '2023-01-07T17:44:56.996Z',
//     name: 'asdad',
//     phone: '234242424444',
//     gender: 'female',
//     id: '19',
//   },
//   {
//     createdAt: '2023-01-11T03:37:19.708Z',
//     name: 'Kim',
//     phone: '918-585-6044',
//     gender: 'male',
//     id: '20',
//   },
//   {
//     createdAt: '2023-01-10T13:43:26.049Z',
//     name: 'Elva',
//     phone: '285-565-3149',
//     gender: 'female',
//     id: '21',
//   },
//   {
//     createdAt: '2023-01-10T17:56:47.407Z',
//     name: 'Omari',
//     phone: '766-920-4531',
//     gender: 'male',
//     id: '22',
//   },
//   {
//     createdAt: '2023-01-11T04:48:32.472Z',
//     name: 'Mable',
//     phone: '437-526-3297',
//     gender: 'female',
//     id: '23',
//   },
//   {
//     createdAt: '2023-01-10T22:37:42.066Z',
//     name: 'Davonte',
//     phone: '287-337-7468',
//     gender: 'male',
//     id: '24',
//   },
//   {
//     createdAt: '2023-01-11T08:31:55.159Z',
//     name: 'Timmothy',
//     phone: '792-359-0402',
//     gender: 'male',
//     id: '25',
//   },
//   {
//     createdAt: '2023-01-11T00:22:18.148Z',
//     name: 'Nadia',
//     phone: '866-803-8753',
//     gender: 'female',
//     id: '26',
//   },
//   {
//     createdAt: '2023-01-10T16:59:06.308Z',
//     name: 'Cordelia',
//     phone: '436-486-8825',
//     gender: 'male',
//     id: '27',
//   },
//   {
//     createdAt: '2023-01-11T00:23:00.560Z',
//     name: 'Edmund',
//     phone: '209-783-1065',
//     gender: 'male',
//     id: '28',
//   },
//   {
//     createdAt: '2023-01-10T22:35:19.396Z',
//     name: 'Noemi',
//     phone: '386-433-8310',
//     gender: 'female',
//     id: '29',
//   },
// ];
