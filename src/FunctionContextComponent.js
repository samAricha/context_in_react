import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext';

export default function FunctionContextComponent() {
    //we are getting the value of our darkTheme based on the context from ThemeContext
    //which gives us either true or false
    const darkTheme = useTheme();
    const toggleTheme = useThemeUpdate();
    const themeStyles = {
        backgroundColor: darkTheme ? '#333' : '#ccc',
            color: darkTheme ? '#ccc' : '#333',
            padding: '2rem',
            margin: '2rem',
            textAlign: 'center',
    }

  return (
    <>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <div style={themeStyles}>FUNCTION THEME</div>
    </>
    
  )
}
