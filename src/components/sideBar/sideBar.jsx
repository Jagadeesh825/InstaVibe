import { Box, Flex, Link, Tooltip, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { CreatePostLogo, NotificationsLogo, SearchLogo } from '../../assets/contants';
import { Avatar } from '@chakra-ui/react';
import { AiFillHome } from 'react-icons/ai';
import { BiLogOut } from 'react-icons/bi'; 
const SideBar = () => {
  const sideBarItems = [
    {
      icon: <AiFillHome size={25} />,
      text: 'Home',
      link: '/',
    },
    {
      icon: <SearchLogo />,
      text: 'Search',
    },
    {
      icon: <NotificationsLogo />,
      text: 'Notification',
    },
    {
      icon: <CreatePostLogo />,
      text: 'Create', 
      link: '/post'
    },
    {
      icon: <Avatar size={'sm'} name="profile" src="/ppt.jpg" />,
      text: 'Profile',
      link: '/asaprogrammer',
    },
  ];

  return (
    <Box
      height={'100vh'}
      borderRight={'1px solid'}
      borderColor={'whiteAlpha.300'}
      py={8}
      position="fixed"
      top={0}
      left={0}
      px={{ base: 2, md: 4 }}
    >
      <Flex direction={'column'} gap={10} w="full" height="full">
        <Link to={'/'} as={RouterLink} display={{ base: 'none', md: 'block' }} cursor="pointer">
          <Image src="/logo.png" h={20} alt="logo" style={{ marginLeft: '-10px' }} />
        </Link>

        <Link
          to={'/'}
          as={RouterLink}
          p={2}
          display={{ base: 'block', md: 'none' }}
          borderRadius={6}
          _hover={{
            bg: 'whiteAlpha.200',
          }}
          w={{ base: 12, md: 'full' }}
          cursor="pointer"
        >
          <Image src="/instavibelogo.png" h={10} w={12} alt="logo" style={{ marginLeft: '-5px' }} />
        </Link>

        <Flex direction={'column'} gap={5} cursor={'pointer'}>
          {sideBarItems.map((item, index) => (
            <Tooltip
              hasArrow
              label={item.text}
              placement='right'
              ml={1}
              openDelay={500}
              display={{ base: 'block', md: 'none' }}
            >
              <Link
                display={'flex'}
                to={item.link || null}
                as={RouterLink}
                alignItems="center"
                gap={4}
                _hover={{ bg: 'whiteAlpha.400' }}
                borderRadius={6}
                p={2}
                w={'full'}
              >
                {item.icon}
                <Box display={{ base: 'none', md: 'block' }}>{item.text}</Box>
              </Link>
            </Tooltip>
          ))}
        </Flex>

        <Tooltip
          hasArrow
          label="Logout"
          placement='right'
          ml={1}
          
          openDelay={300}
          display={{ base: 'block', md: 'none' }}
        >
          <Link
            display={'flex'}
            to={'/auth'}
            as={RouterLink}
            alignItems="center"
            gap={4}
            _hover={{ bg: 'whiteAlpha.400' }}
            borderRadius={6}
            p={2}
            mt={'auto'}
            w={'full'}
          >
            <BiLogOut size={25} />
            <Box display={{ base: 'none', md: 'block' }}>Logout</Box>
          </Link>
        </Tooltip>
      </Flex>
    </Box>
  );
};

export default SideBar;
