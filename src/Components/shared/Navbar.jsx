import React from 'react';
import navLogo from '../../assets/logo.png'
import { NavLink } from 'react-router';
import { RxHamburgerMenu } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import Mynavlink from './Mynavlink';

const Navbar = () => {
    return (



        <div className='border-b border-b-[#e9e9e9] border-solid sticky top-0 z-50 bg-base-100 py-2.5'>


            <div className="navbar bg-base-100  max-w-7xl mx-auto ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">

                            <RxHamburgerMenu></RxHamburgerMenu>
                        </div>
                        <ul
                            tabIndex="-1"
                            className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">


                            <li> <Mynavlink to={"/"}>Home</Mynavlink>    </li>

                            <li>  <Mynavlink to={"/allapp"}>Apps</Mynavlink>   </li>

                            <li> <Mynavlink to={"/installapp"}>Installation</Mynavlink> </li>


                        </ul>
                    </div>

                    <div className='flex gap-2'>
                        <img src={navLogo} alt="" className='w-10 h-10 object-cover' />
                        <p className='font-bold bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent text-2xl'>HERO.IO</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex gap-4 menu-horizontal px-1">

                        <li> <Mynavlink to={"/"}>Home</Mynavlink>    </li>

                        <li>  <Mynavlink to={"/allapp"}>Apps</Mynavlink>   </li>

                        <li> <Mynavlink to={"/installapp"}>Installation</Mynavlink> </li>

                    </ul>
                </div>



                <div className=" navbar-end gap-2 ">

                    <button className="flex items-center gap-2 py-3 px-4 bg-linear-to-r from-[#632ee3] to-[#9f62f2] rounded text-white">   <FaGithub className='w-5 h-5' /> Get Started</button>

                </div>
            </div>
        </div >
    );
};






//         <div className='border-b border-solid border-[#e9e9e9]'>
//             <div className='max-w-7xl mx-auto '>

//                 <div>

//                     <div className='flex gap-2 items-center'>
//                         <img src={navLogo} alt="" className='w-10 h-10 object-cover' />
//                         <p className='font-bold bg-linear-to-r from-[#632ee3] to-[#9f62f2] bg-clip-text text-transparent text-2xl'>HERO.IO</p>
//                     </div>
//                 </div>


//                 <ul>
//                     <li>
//                         <NavLink to={"/"}>Home  </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to={"/"}>Home  </NavLink>
//                     </li>
//                     <li>
//                         <NavLink to={"/"}>Home  </NavLink>
//                     </li>
//                 </ul>

//             </div>

//         </div>
//     );
// };

export default Navbar;