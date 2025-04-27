
// stores/reducer.ts

import { combineReducers } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import counterReducer from '../features/counter/counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Tambahkan slice lain di sini
});

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
  whitelist: ['counter'], // hanya `auth` yang disimpan, bisa disesuaikan
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default persistedReducer;
export type RootState = ReturnType<typeof rootReducer>;
