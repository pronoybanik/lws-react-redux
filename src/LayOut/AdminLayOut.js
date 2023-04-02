import React from 'react';
import AdminNavBar from '../components/NavBar/AdminNavBar';
import { Outlet } from 'react-router-dom';

const AdminLayOut = () => {
    return (
        <body>
            <AdminNavBar></AdminNavBar>
            <Outlet></Outlet>
        </body>
    );
};

export default AdminLayOut;