
// src/main.tsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './App';
import { store, persistor } from './store';  // Import store Redux
import './styles.css';

/**
 * Menyisipkan aplikasi React ke dalam DOM dan menghubungkannya ke Redux store.
 * @returns {void} - Tidak ada nilai yang dikembalikan
 */
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>  {/* Provider untuk Redux Store */}
      <PersistGate loading={null} persistor={persistor}>     
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
