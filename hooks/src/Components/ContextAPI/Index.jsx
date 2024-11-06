import React, { createContext } from 'react'

const BioContext=createContext();

const BioProvider=({children}) =>{
    const myName="Mohit";
    const myAge="20";

    return <BioContext.Provider value={{myName,myAge}}>{children}</BioContext.Provider>;
}

export {BioProvider,BioContext}