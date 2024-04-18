import React, { useState, useEffect, useCallback } from 'react';
import Header from "./components/Header.js"
import Footer from './components/Footer.js'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProvider } from './context/AppContext';
import MainLayout from './components/MainLayout.js';
import theme from './theme/theme.js';
import { HeaderVisibilityProvider } from './context/HeaderContext.js';
import debounce from 'lodash/debounce';


if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
      trackAllPureComponents: true,
  });
}


const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  console.log("Initialized Search Term to ''.")

  const handleSearch = useCallback((searchInput) => {
    if (searchInput !== searchTerm) {
      setSearchTerm(searchInput);
      console.log('Set SearchTerm to searchInput')
    }
  }, [searchTerm]);

  const clearSearchTerm = () => {
    console.log('cleared search term')
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

App.whyDidYouRender = true;

export default App;
