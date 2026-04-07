import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/shared/Navbar';
import Footer from '../Components/shared/Footer';

const Rootlayout = () => {
    return (
        <div>
            <Navbar />
            <Outlet></Outlet>
            <Footer />

        </div>
    );
};

export default Rootlayout;