import { Children } from "react";
// import { Installed } from "./Installed";



 const Installedappcontext = ({Children});
 const data ={
    name: "Emon",
    age: "21",
 }


const InstalledAppContext = () => {
    return < InstalledAppContext.Provider value={data}>
        {Children}
    </InstalledAppContext.Provider>
        
    // return <InstalledAppContext.provide>
        
    // </InstalledAppContext.provide>
    
};

export default Installedappcontext;