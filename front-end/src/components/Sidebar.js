import React from 'react';
import { 
   Box,
   Link, 
   Button,
   Heading, 
   Accordion, 
   AccordionItem, 
   AccordionButton, 
   AccordionPanel, 
   AccordionIcon, 
   VStack,
   Checkbox,
   Text,
   IconButton,
   useDisclosure,
  } from '@chakra-ui/react';
  import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
  import { useHeaderVisibility } from '../context/HeaderContext';
  import { useAppContext } from '../context/AppContext';
  

const Sidebar = ({ isMobile }) => {
  const { isOpen, onToggle } = useDisclosure();
  const { isHeaderVisible } = useHeaderVisibility();
  const { goToHome, currentPage, goToFaq, goToContactUs, updateMinSalePercentage  } = useAppContext();
  const sidebarTop = isHeaderVisible ? '7rem' : '0';
  const iconTop = isHeaderVisible ? '8rem' : '1rem';
  const [selectedPercentage, setSelectedPercentage] = React.useState(20);


  const handleHomeClick = () => {
    console.log({currentPage})
    goToHome(); // Reset to home view
    onToggle(); // Optional: Close sidebar upon clicking
  };

  const handleFaqClick = () => {
    console.log({currentPage})
    goToFaq(); // Reset to about view
    onToggle(); // Optional: Close sidebar upon clicking
  };

  const handleContactUsClick = () => {
    console.log({currentPage})
    goToContactUs(); // Reset to about view
    onToggle(); // Optional: Close sidebar upon clicking
  };

  const handlePercentChange = (percentage) => {
    const newPercentage = selectedPercentage === percentage ? null : percentage; // Toggle selection
    setSelectedPercentage(newPercentage);
    updateMinSalePercentage(newPercentage);
  }


  return (      
  <>
    <IconButton
        icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
        aria-label="Toggle Sidebar"
        onClick={onToggle}
        border="1px solid gray"
        position="fixed"
        top={iconTop}        
        left={{ base: isOpen ? "17rem" : "1rem" }}
        style={{
          transition: 'top .3s ease-in-out',
        }}
        zIndex="overlay" // Try a higher value if "overlay" is not effective
      />
    <Box 
      w="250px" 
      position="fixed" 
      height="100vh" 
      top={sidebarTop} 
      p="5" bg="blue.400" 
      display={isOpen ? 'block' : 'none'}
      zIndex='2'
      style={{
        transition: 'top 0.3s ease-in-out, right 0.3s ease-in-out, left 0.3s ease-in-out',
      }}
    >
        {/* Render the buttons conditionally based on the isMobile prop */}
        {isMobile && (
          <VStack align="stretch" spacing={1} p={2}>
            <Button onClick={handleHomeClick} variant="ghost">Home</Button>
            <Button onClick={handleContactUsClick} variant="ghost">Contact Us</Button>
            <Button onClick={handleFaqClick} variant="ghost">FAQ</Button>
          </VStack>
        )}
     <Heading size="md" mb="4">Filters</Heading>
    <Accordion allowToggle>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="bold">
            Stores
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {/* Filters for Category 1 */}
          <VStack align="stretch">
            <Checkbox isDisabled>Amazon</Checkbox>
            <Checkbox isChecked>Best Buy</Checkbox>
            <Checkbox isDisabled>WalMart</Checkbox>
            <Checkbox isDisabled>Target</Checkbox>
            {/* Add more filters */}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
      {/* Repeat for other categories */}
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="bold">
            Percent Off 
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {/* Filters for Category 2 */}
          <VStack align="stretch">
                {/* Update these checkboxes to call handlePercentChange with the correct percentage */}
                {[5, 10, 20, 30, 40, 50, 60, 70, 80, 90].map(percentage => (
                  <Checkbox 
                  key={percentage} 
                  isChecked={selectedPercentage === percentage}
                  onChange={() => handlePercentChange(percentage)}
                >
                    {percentage}%+
                  </Checkbox>
                ))}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight="bold">
            Price 
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel pb={4}>
          {/* Filters for Category 2 */}
          <VStack align="stretch">
            <Checkbox>$1-$5</Checkbox>
            <Checkbox>$5-$10</Checkbox>
            <Checkbox>$10-$20</Checkbox>
            <Checkbox>$20-$40</Checkbox>
            <Checkbox>$40-$80</Checkbox>
            <Checkbox>$80-$150</Checkbox>
            <Checkbox>$150+</Checkbox>
            <Text>I'll add more later</Text>
            {/* Add more filters */}
          </VStack>
        </AccordionPanel>
      </AccordionItem>
      {/* You can add more AccordionItem components for additional categories */}
    </Accordion>
  </Box>
  </>
  );
};

export default Sidebar;