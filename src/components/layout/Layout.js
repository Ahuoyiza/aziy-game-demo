import { Flex } from '@chakra-ui/react';
import Nav from './Nav';
import Footer from './Footer';

const Layout = ({children}) => {
  return (
    <Flex direction={"column"} maxH={"100vh"} maxW={"100vw"}>
    <Nav/>
    {children}
    <Footer/>
      
    </Flex>
  )
}

export default Layout
