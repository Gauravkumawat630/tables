import React from 'react';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({ children, auth }) {
  return auth ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
