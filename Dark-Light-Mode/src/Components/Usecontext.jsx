import { createContext, useState } from "react";

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



