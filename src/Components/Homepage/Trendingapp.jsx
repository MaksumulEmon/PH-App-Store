import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';

const Trendingapp = () => {
    // const  data= useLoaderData();
    // console.log(data, "Data from trending page")


    const [apps, setApps] = useState([]);

    useEffect(() =>{
        const fetchData= async () =>{
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);
            setApps(data);
        };
        fetchData();
    }, []);

    return (
        <div className='bg-[#f5f5f5] '>


            <div className='max-w-7xl mx-auto '>

                <div className='text-center p-10 space-y-3'>
                    <h1 className='text-5xl font-bold'>Trending Apps</h1>
                    <p className='text-xl  opacity-80'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                {apps.map((app,ind) => {
                    return <div>{app.title}</div>
                })}
            </div>
        </div>
    );
};

export default Trendingapp;