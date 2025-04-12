import React, { useContext } from 'react';
import { Box, Flex, Button, Spacer, Link as ChakraLink, Heading } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { isAuth, logout,user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <Box bg="teal.500" px={4} py={3} color="white">
      <Flex align="center">
        <ChakraLink as={Link} to="/" fontWeight="bold" fontSize="xl">
          Financial Time Machine
        </ChakraLink>
        <Spacer />
        <Flex gap={4}>
          <ChakraLink as={Link} to="/finance">Finance</ChakraLink>
          <ChakraLink as={Link} to="/projection">Projection</ChakraLink>
          {!isAuth ? (
            <>
              <Button as={Link} to="/login" colorScheme="blackAlpha" bg={'yellow'} variant="outline" size="sm">
                Login
              </Button>
              <Button as={Link} to="/signup" colorScheme="red" bg={'blue'} variant="outline" size="sm">
                Sign Up
              </Button>
            </>
          ) : (
            <Button onClick={handleLogout} colorScheme="blackAlpha" bg={'red'}  variant="solid" size="sm">
              Logout
            </Button>
          )}
          <Heading>Welcome {user?.name || "User"}</Heading>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Navbar;