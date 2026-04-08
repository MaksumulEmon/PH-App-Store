import React from 'react';
import heropng from '../../assets/hero.png'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { SiAppstore } from "react-icons/si";


const Banner = () => {
    return (
        <div className='max-w-7xl mx-auto'>

            <div className='flex-col-reverse '>

                <div>
                    <div className='space-y-7 lg:mt-10'>
                        <h1 className='text-center text-4xl lg:text-7xl font-bold'>We Build <br />
                            <span className='text-purple-700'>Productive</span> Apps</h1>
                        <p className='text-xl text-[#627382]  text-center  m-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                    </div>

                    <div className='flex justify-center gap-3 mt-4'>
                        <button className='btn  border-solid border-[black] bg-[#f5f5f5]'> <IoLogoGooglePlaystore /> Google Play</button>
                        <button className='btn  border-solid border-[black] bg-[#f5f5f5]'>  <SiAppstore /> App Store</button>
                    </div>
                </div>

                <img src={heropng} alt="" className='flex  justify-center mx-auto mt-5' />


            </div>

        </div>
    );
};

export default Banner;