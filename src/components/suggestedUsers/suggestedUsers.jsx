import { Flex, Box, Text, VStack, Link } from '@chakra-ui/react';
import SuggestedHeader from './suggestedHeader'; // Keep the import statement
import SuggestedUser from './suggestedUser';

const SuggestedUsers = () => {
  return (
    <VStack py={8} px={6} gap={4} >
      <SuggestedHeader /> 
      <Flex alignItems={'center'} justifyContent={'space-between'} w={'full'}>

      <Text fontSize={12} fontWeight={'bold'} color={'gray.400'}>
        suggested for you
      </Text>
        <Text fontSize={12} fontWeight={'bold'} _hover={{ color: 'gray.400' }} cursor={'pointer'}>
          see All
        </Text>
      </Flex>
      <SuggestedUser name="jagadeesh" followers={1234} avatar='/ppt.jpg'/>
      <SuggestedUser name='kumar' followers ={662} avatar="/img1.png"/>
      <SuggestedUser name='dhruva' followers={1234} avatar="/img2.jpeg"/>
      <SuggestedUser name='Arjun' followers={555} avatar="/img3.png"/>
      
      
      <Box
        fontSize={12} color={'gray.500'} mt={5}
      >
        @2024 Built By{' '}
        <Link href='https://porfolio825.netlify.app' target='_blank' color='blue.500' fontSize={14}>
          As a Programmer
        </Link>
      </Box>
    </VStack>
  );
}

export default SuggestedUsers;
