import { Flex, Box } from '@chakra-ui/react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/sideBar/sideBar'

const PageLayout = ({ children }) => {
  const { pathname } = useLocation();
  return (
    <Flex>
      {/* Side bar */}
      {pathname !== '/auth' ? (
        <Box w={{ base: '70px', md: '240px' }}> 
        <SideBar/>
        </Box>
      ) : null}
      {/* Page content */}
      <Box flex={1} w={{ base: 'calc(100% - 70px)', md: 'calc(100% - 240px)' }}>
        {children}
      </Box>
    </Flex>
  );
};

export default PageLayout;
