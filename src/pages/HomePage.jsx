import { Container, Box, Flex, Button } from '@chakra-ui/react';
import React, { useState } from 'react';
import FeedPosts from '../components/FeedPosts/FeedPosts'; 
import SuggestedUsers from '../components/suggestedUsers/suggestedUsers';

const HomePage = () => {
  const [showSuggestedUsers, setShowSuggestedUsers] = useState(true);

  return (
    <Container maxW={'container.lg'}>
      {/* Button to toggle SuggestedUsers - Mobile only */}
      <Box display={{ base: 'block', lg: 'none' }} textAlign="center" mb={4}>
        <Button
          onClick={() => setShowSuggestedUsers(!showSuggestedUsers)}
          bg="gray.800"
          color="white"
          fontSize="sm"
        >
          {showSuggestedUsers ? 'Hide Suggested Users' : 'Show Suggested Users'}
        </Button>
      </Box>

      <Flex gap={20}>
        {/* FeedPosts */}
        <Box flex={2} py={10}>
          <FeedPosts />
        </Box>

        {/* SuggestedUsers - Desktop */}
        <Box flex={3} mr={20} display={{ base: "none", lg: "block" }} maxW={"300px"}>
        <SuggestedUsers />
      </Box>

        {/* SuggestedUsers - Mobile */}
        {showSuggestedUsers && (
          <Box
            display={{ base: 'block', lg: 'none' }}
            position="fixed"
            bottom={0}
            left={0}
            width="100%"
            bg="black"
            p={4}
            zIndex={1}
          >
            <SuggestedUsers />
          </Box>
        )}
      </Flex>
    </Container>
  );
};

export default HomePage;
