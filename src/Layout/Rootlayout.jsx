import React from 'react';
import { Outlet } from 'react-router';

const Rootlayout = () => {
    return (
        <div>
            <h2>Nav Bar</h2>
            <Outlet></Outlet>
            <h2>Footer</h2>

        </div>
    );
};

export default Rootlayout;