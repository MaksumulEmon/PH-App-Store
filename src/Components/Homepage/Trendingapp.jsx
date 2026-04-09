import React, { use, useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router';
import Appcard from '../Ui/Appcard';
import { HashLoader } from 'react-spinners';
import { Link } from 'react-router';

const Trendingapp = () => {
    // const  data= useLoaderData();
    // console.log(data, "Data from trending page")


    const [apps, setApps] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/data.json");
            const data = await res.json();
            console.log(data);

            setTimeout(() => {
                setApps(data)
                setLoading(false)
            }, 2000);

            // setApps(data);
            // setLoading(false);
        };
        fetchData();
    }, []);

    console.log(apps, "Appps")
    console.log(loading, "Loading");
    return (
        <div className='bg-[#f5f5f5] '>


            <div className='max-w-7xl mx-auto '>

                <div className='text-center p-10 space-y-3'>
                    <h1 className='text-5xl font-bold'>Trending Apps</h1>
                    <p className='text-xl  opacity-80'>Explore All Trending Apps on the Market developed by us</p>
                </div>

                {loading ? <div className='flex justify-center '> <HashLoader color='purple' /> </div> : <div className='grid grid-cols-1 lg:grid-cols-3  '>
                    {apps.slice(0, 9).map((app, ind) => {
                        return (
                            <Appcard app={app} key={ind}></Appcard>
                        );

                    })}

                </div>}
                
                <div className='text-center'>
                    <Link to={"/allapp"}>
                        <button className='btn bg-linear-to-r from-[#632ee3] to-[#9f62f2] text-white'>View All</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Trendingapp;