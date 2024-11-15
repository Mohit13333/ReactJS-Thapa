import React, { createContext, useContext,use } from 'react'

const BioContext=createContext();

const BioProvider=({children}) =>{
    const myName="Mohit";
    const myAge="20";

    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>;
}

// custom hooks 

const useBioContext=()=>{
    // const context=useContext(BioContext);
    const context=use(BioContext);
    return context;
}
export {BioProvider,BioContext,useBioContext}