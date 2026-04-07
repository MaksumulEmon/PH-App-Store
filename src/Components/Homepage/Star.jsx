import React from 'react';

const Star = () => {
    return (
        <div className='bg-linear-to-r from-[#632ee3] to-[#9f62f2] py-5'>


            <div className='max-w-7xl mx-auto lg:p-20 text-white'>

                <h1 className='text-5xl font-bold text-center'>Trusted by Millions, Built for You</h1>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-12 mt-12 '>

                    <div className='text-center flex flex-col gap-2'>
                        <p className=' opacity-80' >Total Downloads</p>
                        <p className='text-6xl font-bold'>29.6M</p>
                        <p className='opacity-80'>21% more than last month</p>
                    </div>
                    <div className='text-center flex flex-col gap-2'>
                        <p className=' opacity-80' >Total Reviews</p>
                        <p className='text-6xl font-bold'>906K</p>
                        <p className='opacity-80'>46% more than last month</p>
                    </div>
                    <div className='text-center flex flex-col gap-2'>
                        <p className=' opacity-80' >Active Apps</p>
                        <p className='text-6xl font-bold'>132+</p>
                        <p className='opacity-80'>31 more will Launch</p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Star;