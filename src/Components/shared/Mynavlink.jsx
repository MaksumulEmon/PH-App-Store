import React from 'react';
import { NavLink } from 'react-router';

const Mynavlink = ({to, children}) => {
    return (
        <div>
            <li>
                <NavLink to ={to} className={({isActive}) => `font-bold ${isActive ? " bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent border-b border-purple-600 pb-1" : ""}`}>{children}</NavLink>
            </li>

        </div>
    );
};

export default Mynavlink;