// App.js
import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import "./index.css";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Protected from './pages/protected';
import Portfolio from './pages/Portfolio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Portfolio />} index />
        <Route
          path="/dashboard"
          element={
            <Protected>
              <Dashboard />
            </Protected>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
