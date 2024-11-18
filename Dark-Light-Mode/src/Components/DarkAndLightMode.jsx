import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

const ThemeProvider=({children}) => {
    const [theme,setTheme]=useState('dark');
    const handleToggleTheme=() => {
        return setTheme((prev)=>prev=== "dark"?"light":"dark");
    }
    return <ThemeContext.Provider value={{theme,handleToggleTheme}}>
        {children}
    </ThemeContext.Provider>
}


export { ThemeProvider,ThemeContext}




const DarkAndLightMode = () => {
    const {theme,handleToggleTheme}=useContext(ThemeContext)
  return (
    <>
    <div className={`p-4 grid h-lvh justify-items-center place-content-center ${theme==='dark'?'bg-gray-950 text-white':'bg-white text-black'}`}>
        <h1>DarkModeand LightMode</h1>
        <p> Hello friends</p>
        <button className="bg-indigo-800 hover:bg-indigo-600 hover:scale-110 hover:animate-bounce text-white rounded-xl mt-4 p-4 transition ease-in duration-300" onClick={handleToggleTheme}>{theme==="dark"?"Set to light mode":"Set to dark mode"}</button>
    </div>
      
    </>
  )
}

export default DarkAndLightMode
