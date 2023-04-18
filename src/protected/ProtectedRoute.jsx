import React from 'react';
import Home from '../component/Home';
import Login from '../Login/Login';

const ProtectedRoute = () => {
  const isAuthenticate=localStorage.getItem('isAuthenticate')
  return isAuthenticate==="true" ? <Home/> : <Login to="/login" />;
};

export default ProtectedRoute;
