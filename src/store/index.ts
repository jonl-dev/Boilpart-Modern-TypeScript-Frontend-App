
// src/store/index.ts

import {
  configureStore,
  isPlain,
  Tuple,
} from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedReducer from './reducer';
import { batchedSubscribe } from 'redux-batched-subscribe';
import _ from 'lodash';

// Thunk: extra dependency
const extraArgument = {
  apiClient: {}, // inject API client atau service di sini
};

const debounceNotify = _.debounce((notify) => notify(), 16);

export const store = configureStore({
  reducer: persistedReducer,

  devTools: import.meta.env.MODE !== 'production',

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument,
      },
      immutableCheck: {
        warnAfter: 32,
        ignoredPaths: ['some.deep.path'],
      },
      serializableCheck: {
        isSerializable: (value) =>
          typeof value === 'undefined' ||
          value === null ||
          typeof value === 'string' ||
          typeof value === 'boolean' ||
          typeof value === 'number' ||
          Array.isArray(value) ||
          isPlain(value),
        ignoredActions: [
          'persist/PERSIST',
          'persist/REHYDRATE',
          'persist/PAUSE',
          'persist/FLUSH',
          'persist/PURGE',
          'persist/REGISTER',
        ],
        ignoredPaths: ['_persist'],
        warnAfter: 32,
      },
    }),

  enhancers: (getDefaultEnhancers) =>
    getDefaultEnhancers({
      autoBatch: true,
    }).concat(batchedSubscribe(debounceNotify)),
});

export const persistor = persistStore(store);

// Typing
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
