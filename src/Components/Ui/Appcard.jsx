import React from 'react';
import { MdOutlineFileDownload, MdStarBorder } from "react-icons/md";
const Appcard = ({ app, ind }) => {
    return (

        <div key={ind} className="card bg-base-100 shadow-sm p-4 space-y-3 ">
            <figure>
                <img
                    src={app.image}
                    alt={app.title} className='w-58 h-58 rounded object-contain' />
            </figure>
            <h4 className='text-xl font-semibold'>{app.title}</h4>
            <div className="flex justify-between">

                <p className='bg-[#F1F5E8] text-[00D390] flex items-center gap-2 font-medium px-2 py-2.5 rounded'> <MdOutlineFileDownload /> {app.downloads} </p>

                <p className='bg-[#FFF0E1] text-[#FF8811] flex items-center gap-2 font-medium px-2 py-2.5 rounded'> <MdStarBorder /> {app.ratingAvg}</p>
            </div>
        </div>

    );
};

export default Appcard;