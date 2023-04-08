import React from 'react';
import { Navigate } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PublicRouteStudent = ({ children }) => {
    const isLoggedIn = useAuth();
    return !isLoggedIn ? children : <Navigate to={`/coursePlayer/${1}`}></Navigate>;
};

export default PublicRouteStudent;



