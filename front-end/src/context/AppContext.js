// src/context/AppContext.js
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children, clearSearchTerm }) => {
  const [currentPage, setCurrentPage] = useState('home');

  const goToHome = () => {
    setCurrentPage('home');
    clearSearchTerm(); // Clear the search term when going home
  }
  const goToFaq = () => {
    setCurrentPage('FAQ');
    clearSearchTerm();
  }
  const goToContactUs = () => {
    setCurrentPage('ContactUs');
    clearSearchTerm();
  }
    

  const goToSearchResults = (searchTerm) => setCurrentPage('searchResults');

  return (
    <AppContext.Provider value={{ currentPage, goToFaq, goToHome, goToContactUs, goToSearchResults }}>
      {children}
    </AppContext.Provider>
  );
};