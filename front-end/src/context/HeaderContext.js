import React, { createContext, useState, useContext } from 'react';

const HeaderVisibilityContext = createContext();

export const useHeaderVisibility = () => useContext(HeaderVisibilityContext);

export const HeaderVisibilityProvider = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);

  return (
    <HeaderVisibilityContext.Provider value={{ isHeaderVisible, setIsHeaderVisible }}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
};