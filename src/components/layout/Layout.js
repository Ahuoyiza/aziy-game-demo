import { Flex } from '@chakra-ui/react';
import Nav from './Nav';
import Footer from './Footer';
import { ChakraProvider } from '@chakra-ui/react';


const Layout = ({children}) => {
  return (
   <ChakraProvider>
     <Flex direction={"column"} maxH={"100vh"} maxW={"100vw"}>
    <Nav/>
    {children}
    <Footer/>
      
    </Flex>
   </ChakraProvider>
  )
}

export default Layout
