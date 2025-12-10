import React, { useEffect } from 'react';
import { createContext, useState } from 'react'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

  // get the data from the local storage ⤵
  const [data, setData] = useState(() => {
    const storedData = localStorage.getItem('productData')
    try {
      // Only attempt to parse if storedProducts is not null or undefined
      // and is a string. If it's null, return an empty array or default value.
      return storedData ? JSON.parse(storedData) : [];
    } catch (error) {
      console.error("Failed to parse stored products:", error);
      // Return a default value in case of parsing error
      return [];
    }
  });

  // store the data in the local storage ⤵
  useEffect(() => {
    localStorage.setItem('productData', JSON.stringify(data))
  }, [data])
  return (
    <AppContext.Provider value={{ data, setData }}>
      {children}
    </AppContext.Provider>
  )
}

export { AppProvider, AppContext }
// export default AppContext;