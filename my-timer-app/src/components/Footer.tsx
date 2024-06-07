// src/components/Footer.tsx
import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="teal.500" py={4}>
      <Text textAlign="center" color="white">© 2024 Task Manager. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
