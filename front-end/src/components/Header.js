import React, { useState, useEffect, useRef } from 'react';
import { Box, Flex, Image, Input, Button, useBreakpointValue } from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
import { useHeaderVisibility } from '../context/HeaderContext';
import { useAppContext } from '../context/AppContext';


const Header = ({ onSearch }) => {
  const { setIsHeaderVisible } = useHeaderVisibility();
  const { goToHome, goToFaq, goToContactUs } = useAppContext();
  const headerRef = useRef(null); 
  const currentPositionY = useRef(window.scrollY);
  const [inputValue, setInputValue] = useState('');
  const isMobile = useBreakpointValue({ base: true, md: false });

const handleInputChange = (e) => {
  const sanitizedValue = e.target.value.replace(/[^a-zA-Z0-9 ]/g, ""); // Remove special characters
  setInputValue(sanitizedValue);
};

const handleSubmit = () => {
  const encodedValue = encodeURIComponent(inputValue); // Encode the input for URL
  onSearch(encodedValue); // Pass the encoded and sanitized value back to the parent component
};

// const handleInputChange = (e) => {
//   setInputValue(e.target.value);
// };

// const handleSubmit = () => {
//   onSearch(inputValue); // Pass the input value back to the parent component
// };


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit(); // If the Enter key is pressed, trigger the search
    }
  };

  const handleHomeClick = () => {
    goToHome(); // Reset to home view
    setInputValue(''); // Optional: Clear the search input if desired
    onSearch(''); // Clear any existing search term
  };

  const handleFaqClick = () => {
    goToFaq(); // Reset to home view
    setInputValue(''); // Optional: Clear the search input if desired
    onSearch(''); // Clear any existing search term
  };
  const handleContactUsClick = () => {
    goToContactUs(); // Reset to home view
    setInputValue(''); // Optional: Clear the search input if desired
    onSearch(''); // Clear any existing search term
  };


  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      let newPositionY = window.scrollY;
      if (newPositionY > currentPositionY.current) {
        // Scrolling down
        headerRef.current.style.transform = "translateY(-7rem)";
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        headerRef.current.style.transform = "translateY(0)";
        setIsHeaderVisible(true);
      }
      currentPositionY.current = newPositionY; // Update the current position after the comparison
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setIsHeaderVisible]);


  return (
    <Flex 
    ref={headerRef}
    position="fixed"
    top={0}
    left={0}
    right={0}
    as="header" 
    zIndex='2'
    height="7rem" 
    width="100vw" 
    align="center" 
    justify="space-between" 
    padding="1rem" bg="gray.100" 
    color="black" backgroundColor="grey" 
    style={{
      transition: 'transform .3s ease-in-out',
    }}>
      <Image src="/logo.png" alt="logo" boxSize="6rem" />
      {!isMobile && (
        <Flex as="nav" gap="2rem">
          <Button onClick={handleHomeClick} variant="ghost">Home</Button>
          <Button onClick={handleFaqClick} variant="ghost">FAQ</Button>
          <Button onClick={handleContactUsClick} variant="ghost">Contact Us</Button>
        </Flex>
      )}
      <Flex align="center" gap="1rem">
      <Input 
          placeholder="Search" 
          size="lg" // Adjust the size as needed
          type='text'
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyPress}
          sx={{
            '::placeholder': {
              color: 'black', // Placeholder text color
            },
            fontSize: '1rem', // Adjust font size as needed
          }}
        />
        <Button onClick={handleSubmit}>Search</Button>
        {/* <FaUserCircle size="2em" /> */}
      </Flex>
    </Flex>
  );
};

export default Header;
