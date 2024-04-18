// src/context/AppContext.js
import React, { createContext, useContext, useState, useMemo } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children, clearSearchTerm }) => {
  const [currentPage, setCurrentPage] = useState('home');
  const [minSalePercentage, setMinSalePercentage] = useState(20);
  console.log(`Page is initialized to: ${currentPage}`)
  

  const goToHome = () => {
    if (currentPage !== 'home') {
      console.log(`Selected goToHome, currentpage is ${currentPage}`)
      setCurrentPage('home');
      clearSearchTerm(); // Clear the search term when going home
    }

  }
  const goToFaq = () => {
    setCurrentPage('FAQ');
    clearSearchTerm();
  }
  const goToContactUs = () => {
    setCurrentPage('ContactUs');
    clearSearchTerm();
  }

  const updateMinSalePercentage = (percentage) => {
    setMinSalePercentage(percentage);
  };
    

  const goToSearchResults = (searchTerm) => setCurrentPage('searchResults');

  const value = useMemo(() => ({
    currentPage, 
    goToFaq, 
    goToHome, 
    goToContactUs, 
    goToSearchResults, 
    updateMinSalePercentage, 
    minSalePercentage
}), [currentPage, minSalePercentage]);

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};