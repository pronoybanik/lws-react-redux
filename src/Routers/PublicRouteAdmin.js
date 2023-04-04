import React from 'react';
import useAuth from '../Hooks/useAuth';
import { Navigate } from 'react-router-dom';

const PublicRouteAdmin = ({ children }) => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? children : <Navigate to="/admin"></Navigate>;
};

export default PublicRouteAdmin;