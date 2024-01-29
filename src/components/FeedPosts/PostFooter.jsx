import React, { useState } from 'react';
import { Box, Flex, Input, Text, InputGroup, InputRightElement, Button } from '@chakra-ui/react';
import { NotificationsLogo, UnlikeLogo, CommentLogo } from '../../assets/contants';

const PostFooter = ({ username }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(1000);

  const handleLike = () => {
    setLiked((prevLiked) => !prevLiked); // Toggle liked state
    setLikes((prevLikes) => (liked ? prevLikes + 1 : prevLikes - 1)); // Update like count
  };

  return (
    <>
      <Flex alignItems={'center'} gap={4} w={'full'} pt={0} mb={2} mt={4}>
        <Box onClick={handleLike} cursor={'pointer'} fontSize={18}>
          {liked ? <NotificationsLogo /> : <UnlikeLogo />}
        </Box>

        <Box cursor={'pointer'} fontSize={18}>
          <CommentLogo />
        </Box>
      </Flex>

      <Text as="span" fontWeight={400}>
        {likes} likes
      </Text>
      <Flex fontSize="sm" fontWeight={700} gap={2} direction={'row'}>
        {username}{' '}
        <Text as="span" fontWeight={400}>
          Feeling good
        </Text>
      </Flex>
      <Text fontSize="sm" color={'gray'}>
        view all 1,000 comments
      </Text>
      <Flex alignItems={'center'} gap={2} justifyContent={'space-between'} w={'full'}>
        <InputGroup>
          <Input variant={'flushed'} placeholder={'Add a comment...'} fontSize={14} />
          <InputRightElement>
            <Button
              fontSize={14}
              color={'blue.500'}
              fontWeight={600}
              cursor={'pointer'}
              _hover={{ color: 'white' }}
              bg={'transparent'}
            >
              Post
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>
      <Box mt={8} />
    </>
  );
};

export default PostFooter;
