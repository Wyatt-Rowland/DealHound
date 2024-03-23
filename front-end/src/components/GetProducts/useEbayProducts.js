// useEbayProducts.js continue work later
import React, { useState, useEffect } from 'react';

// Helper function to fetch data from eBay's Catalog API
const fetchEbayCatalogData = async (query) => {
  const url = `/api/search?q=${query}`; // Pointing to your server's endpoint

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetching data from server failed:', error);
    return null;
  }
};

// React component for displaying eBay catalog search results
const EbayCatalogSearch = ({ searchTerm }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("Current search term:", searchTerm); // Add this to debug

    if (searchTerm) { // Ensure fetchData is only called with a non-empty searchTerm
      const fetchData = async () => {
        const data = await fetchEbayCatalogData(searchTerm); // Use searchTerm directly
        if (data && data.productSummaries) {
          setItems(data.productSummaries);
        }
      };
  
      fetchData();
    }
  }, [searchTerm]); // Depend on searchTerm to re-fetch when it changes

  return (
    <div>
      <h1>Ebay Catalog Search Results</h1>
      <ul>
        {items.map(item => (
          <li key={item.productId}>{item.title}</li> // Ensure this matches the data structure
        ))}
      </ul>
    </div>
  );
};

export default EbayCatalogSearch;