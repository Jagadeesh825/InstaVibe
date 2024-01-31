import React, { useState } from 'react';
import { Box, Button, Flex, Textarea, VStack } from '@chakra-ui/react';

const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  const handlePostContentChange = (event) => {
    setPostContent(event.target.value);
  };

  const handleSubmit = () => {
    // Handle the post submission logic here
    console.log('Post Content:', postContent);
    // Add more logic to send the post to the server, etc.
  };

  return (
    <Flex justify="center" align="center" minH="80vh">
      <VStack spacing={4} w="80%">
        <Box>
          <Textarea
            placeholder="What's on your mind?"
            value={postContent}
            onChange={handlePostContentChange}
            size="lg"
            resize="none"
          />
        </Box>
        <Box>
          {/* You can add file input for image upload here if needed */}
        </Box>
        <Box>
          <Button colorScheme="teal" onClick={handleSubmit}>
            Post
          </Button>
        </Box>
      </VStack>
    </Flex>
  );
};

export default CreatePost;
