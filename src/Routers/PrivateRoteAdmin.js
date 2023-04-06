import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoteAdmin = ({ children }) => {
    const isLoggedIn = useAuth();
    return isLoggedIn ? children : <Navigate to="/admin/login"></Navigate>;
};

export default PrivateRoteAdmin;