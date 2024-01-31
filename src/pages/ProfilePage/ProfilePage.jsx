import { Avatar, Flex, Box, Heading, Text, Button } from '@chakra-ui/react';
import React, { useRef, useState } from 'react';

const ProfilePage = () => {
  const [profilePicture, setProfilePicture] = useState('/ppt.jpg');
  const fileInputRef = useRef(null);

  const handleFileInputChange = () => {
    fileInputRef.current.click();
  };

  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];

    // For a real application, you would typically send the file to the server
    // and update the user's profile picture in the database.

    // For the example, we'll just update the local state.
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="black"
      color="white"
    >
      <Avatar
        src={profilePicture}
        size="2xl"
        borderWidth={4}
        borderColor="white"
        boxShadow="lg"
        cursor="pointer"
        onClick={handleFileInputChange}
      />
      <input
        type="file"
        accept="image/*"
        style={{ display: 'none' }}
        ref={fileInputRef}
        onChange={handleFileUpload}
      />
      <Box mt={4} textAlign="center">
        <Heading fontSize="2xl" mb={2}>
          Jagadeesh Kumar S
        </Heading>
        <Text fontSize="md" fontWeight="light" mb={4}>
          Software Developer | Passionate about coding
        </Text>
        <Button colorScheme="teal" size="sm" onClick={handleFileInputChange}>
          Edit Profile
        </Button>
      </Box>
    </Flex>
  );
};

export default ProfilePage;
