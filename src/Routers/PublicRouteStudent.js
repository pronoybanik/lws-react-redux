import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PublicRouteStudent = ({ children }) => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? children : <Navigate to="/coursePlayer"></Navigate>;
};

export default PublicRouteStudent;

