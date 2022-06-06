import React from "react";
import FunctionContextComponent from "./FunctionContextComponent";
import './App.css';
import { ThemeProvider } from "./ThemeContext";

export const ThemeContext = React.createContext();

function App() {
 
  return (
    <>
      {/* the ThemeProvider is wrapped around everything because it is used
      to handle the all the logic for handling, updating and pushing out these values to 
      the different children */}
      <ThemeProvider> 
        <FunctionContextComponent/>
      </ThemeProvider>
    </>

  );
}

export default App;
