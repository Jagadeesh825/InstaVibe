import React from 'react';
import { Box, Button, Image, Input, VStack, Flex, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AuthForm = () => {
  const [isLogin, setLogin] = useState(true);
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleAuth = () => {
    // Check if email or password is empty
    if (!inputs.email || !inputs.password) {
      alert('Please fill in both email and password fields');
      return;
    }
  
    // Proceed with authentication logic
    navigate('/');
  };
  

  return (
    <>
      <Box border="1px solid gray" borderRadius={4} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={24} cursor="pointer" alt="Instagram" />
          <Input
            placeholder="Email"
            type="email"
            fontSize={14}
            value={inputs.email}
            onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
          />
          <Input
            placeholder="Password"
            type="password"
            fontSize={14}
            value={inputs.password}
            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
          />
          {!isLogin && (
            <Input
              placeholder="Confirm Password"
              type="password"
              fontSize={14}
              value={inputs.confirmPassword}
              onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
            />
          )}
          <Button w="full" colorScheme="blue" size="sm" fontSize={14} onClick={handleAuth}>
            {isLogin ? 'Login' : 'Sign Up'}
          </Button>
          {/* or text */}
          <Flex alignItems="center" justifyContent="center" my={4} gap={1} w="full">
            <Box flex={2} h="1px" bg="gray.400" />
            <Text mx={1} color="white">
              OR
            </Text>
            <Box flex={2} h="1px" bg="gray.400" />
          </Flex>
          <Flex alignItems="center">
            <Image src="/google.png" w={5} alt="google logo" />
            <Text mx="2" color="blue.500">
              Login with Google
            </Text>
          </Flex>
        </VStack>
      </Box>
      <Box border="1px solid gray" borderRadius={4} padding={5}>
        <Flex alignItems="center" justifyContent="center">
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : 'Already have an account'}
          </Box>
          <Box onClick={() => setLogin(!isLogin)} color="blue.500" cursor="pointer">
            {isLogin ? 'Sign Up' : 'Log in'}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
