import { Navigate } from 'react-router-dom';
import React from 'react';
import { useGoogleAuth } from '../context/authContext';
export const PrivateRoute = ({ children }) => {
  const { token } = useGoogleAuth();
  return token ? children : <Navigate to='/' />;
};
