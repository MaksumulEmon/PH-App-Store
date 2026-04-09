import React, { useEffect, useState } from 'react';

const Useapps = () => {


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



    return {apps, loading}
};

export default Useapps;