
// src/App.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home'

/**
 * Komponen utama aplikasi yang berisi routing
 * @returns {JSX.Element} - Komponen Router dengan konfigurasi routing aplikasi
 */
const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <div>
        <Routes>
          {/* Routing untuk halaman */}
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
