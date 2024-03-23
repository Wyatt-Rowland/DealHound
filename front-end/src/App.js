import React, { useState, useEffect } from 'react';
import Header from "./components/Header.js"
import Footer from './components/Footer.js'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/MainLayout.js';
import theme from './theme/theme.js';
import { HeaderVisibilityProvider } from './context/HeaderContext.js';



const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchInput) => {
    setSearchTerm(searchInput);
  }
  const clearSearchTerm = () => {
    setSearchTerm('');
  };

  return (      
  <AppProvider clearSearchTerm={clearSearchTerm}>
    <ChakraProvider theme={theme}>
        <HeaderVisibilityProvider>
          <Header onSearch={handleSearch} />
          <MainLayout searchTerm={searchTerm} />
        {/* Rest of your app components go here */}
        </HeaderVisibilityProvider>
      <Footer />
    </ChakraProvider>      
    </AppProvider>

  );
};
export default App;
