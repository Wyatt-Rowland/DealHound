import React from 'react';
import {
  Box,
  Text,
  Heading,
  Image,
  Flex,
  Center
} from '@chakra-ui/react';

const ContactUs = () => {
  return (
    <Center width='100vw' p={4}>
      <Flex p={8} borderRadius='lg' border='1px solid gray' bg='blue.400' direction={{ base: 'column' }} alignItems='center' textAlign='center'>
        <Image src="./logo.png" alt="dealhound logo" boxSize='10rem' />
        <Heading>Contact Us</Heading>
        <Text>You can contact us anytime at business@dealhound.shop which is our email. Just list the reason for contacting us in the subject please!</Text>
        <Text>Reasons to contact us include, but are not limited to: improvements, bug reports, issues, questions, and feature requests.</Text>
        <Text>Feel free to send us an email, and we will respond as soon as we can. Thank you!</Text>
      </Flex>
    </Center>
  );
};

export default ContactUs;