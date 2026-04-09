import React from 'react';
import { useParams } from 'react-router';
import Useapps from '../../Components/hooks/Useapps';
import { HashLoader } from 'react-spinners';

const AppDetails = () => {
    const { id } = useParams()
    console.log(id, 'id');
    const { apps, loading } = Useapps();

    const expectedApp = apps.find((app) => app.id == id);

    console.log(apps, loading, "apps", "loading")
    console.log(expectedApp)



    if(loading) {
        return(
            <div className='flex justify-center items-center'>
                <HashLoader/>
            </div>
        );
    }


    return (
        <div className='max-w-7xl mx-auto'>
            App details Page.........
            <div className='shadow-2xl flex p-4 rounded-2xl'>
                <img src={expectedApp.image} alt="" className='w-4- h-40' />
                <h2>{expectedApp.companyName} </h2>
                <button  className='btn bg-purple-500'> Install Now</button>

            </div>

        </div>
    );
};

export default AppDetails;