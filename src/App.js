// App.js
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import "./index.css";

import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Protected from './pages/protected';
import Portfolio from './pages/Portfolio';
import Navbar from './components/NavBar'; // Import Navbar component

function App() {
  return (
    <HashRouter>
      <div>
        <Navbar /> {/* Include Navbar component here */}
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
      </div>
    </HashRouter>
  );
}

export default App;
