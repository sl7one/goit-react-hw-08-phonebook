import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { authSlice } from './auth/authSlice';
import { contactsSlice } from './contacts/contactsSlice';
import { modalSlice } from './contacts/modalSlice';
import localStorage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const persistConfig = {
  key: 'auth',
  storage: localStorage,
  whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    auhtSate: persistedReducer,
    contactsState: contactsSlice.reducer,
    modalState: modalSlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export const persistor = persistStore(store);
