import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { isAuth } from './Helpers';

export default function PrivateRoute() {
  const isAuthenticated = isAuth();
  return (
    <>
      {isAuthenticated ? <Outlet /> : <Navigate to="/register" />}
    </>
  );
}
