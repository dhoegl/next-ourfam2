// MyContext.js to perform NavBar active status check
// Helps to show which page is being displayed by highlighting NavBar text
import React, { createContext, useState } from 'react';

// Create a new context
const MyContext = createContext();

// Create a provider component
const MyContextProvider = ({ children }) => {
    // const [activePath, setActivePath] = useState('/'); // Example state

    return (
        <MyContext.Provider value={{ activePath, setActivePath }}>
            {children}
        </MyContext.Provider>
    );
};

export { MyContext, MyContextProvider };