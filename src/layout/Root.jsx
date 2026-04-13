import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenets/shared/Navbar';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <h2>footer</h2>
        </div>
    );
};

export default Root;