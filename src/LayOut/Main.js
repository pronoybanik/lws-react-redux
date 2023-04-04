import React from 'react';
import NavBar from '../components/NavBar/NavBar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <body>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </body>
    );
};

export default Main;