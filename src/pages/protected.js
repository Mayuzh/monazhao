// components/protected.js
import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { auth } from '../firebase';

const Protected = ({ children }) => {
  const isAuthenticated = !!auth.currentUser;

  if (!isAuthenticated) {
    // Redirect to the login page if not authenticated
    return <Navigate to="/" />;
  }

  // Render the protected content if authenticated
  return <Outlet>{children}</Outlet>;
};

export default Protected;
