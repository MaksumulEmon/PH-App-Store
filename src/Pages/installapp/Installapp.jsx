import React, { useContext } from 'react';
import { InstalledAppContext } from '../../Context/Installedcontext';

const Installapp = () => {

    const contextData = useContext(InstalledAppContext)
    console.log(contextData);
    return (
        <div>
            install Apps
        </div>
    );
};

export default Installapp;