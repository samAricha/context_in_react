import React, {useContext, useState} from "react";

const themeContext = React.createContext();
const themeUpdateContext = React.createContext();

//the following two functions are custom hooks that we are going to use to provide us with
//easy access to the darkTheme and the toggling to the darkTheme
export function useTheme(){
    return useContext(themeContext);
}
export function useThemeUpdate(){
    return useContext(themeUpdateContext);
}


//the following function is a theme provider i.e it will provide different contexts(themes) 
//to it's children
export function ThemeProvider({children}){
    //below line is used to create our state which is darkTheme = true
    const [darkTheme, setDarkTheme] = useState(true);

    // used to toggle(change) between darkTheme = true and darkTheme = false
    //this is also known as updating our state i.e darkTheme
    function toggleTheme(){
        setDarkTheme(prevDarkTheme => !prevDarkTheme)
    }

    return (
        //themeContext provides the state of the darkTheme variable
        //themeUpdateContext provides the state provided by toggleTheme() function
        <themeContext.Provider value={darkTheme}>
            <themeUpdateContext.Provider value={toggleTheme}>
                {children}
            </themeUpdateContext.Provider>          
        </themeContext.Provider>
    )

}