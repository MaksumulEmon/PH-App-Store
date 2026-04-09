// import React, { useEffect, useState } from 'react';
import { HashLoader } from 'react-spinners';
import Appcard from '../../Components/Ui/Appcard';
import Useapps from '../../Components/hooks/Useapps';

const Apps = () => {

    const {apps, loading} =  Useapps();
    console.log(apps, loading);

    // const [apps, setApps] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/data.json");
    //         const data = await res.json();
    //         console.log(data);

    //         setTimeout(() => {
    //             setApps(data)
    //             setLoading(false)
    //         }, 2000);

    //         // setApps(data);
    //         // setLoading(false);
    //     };
    //     fetchData();
    // }, []);
    // console.log(apps, loading)

    return (
        <div className='max-w-7xl mx-auto'>

            <div className='text-center p-10 space-y-3'>
                <h1 className='text-5xl font-bold'>Our All Applications</h1>
                <p className='text-xl  opacity-80'>Explore All Apps on the Market developed by us. We code for Millions by us</p>
            </div>



            {loading ? <div className='flex justify-center '> <HashLoader color='purple' /> </div> : <div className='grid grid-cols-1 lg:grid-cols-3  '>
                {apps.map((app, ind) => {
                    return (
                        <Appcard app={app} key={ind}></Appcard>
                    );

                })}

            </div>}
        </div>
    );
};

export default Apps;