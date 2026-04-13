import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenets/shared/Navbar';
import Footer from '../componenets/shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;