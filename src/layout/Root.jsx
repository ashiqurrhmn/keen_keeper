import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../componenets/shared/Navbar';
import Footer from '../componenets/shared/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>

             <ToastContainer />
        </div>
    );
};

export default Root;