import loungeBg from "../../assets/lounge-bg.mp4";
import pc from "../../assets/programming-info.png";
import rookImg from "../../assets/rookie-card.png";
import { ChakraProvider, Flex, Heading, Link } from '@chakra-ui/react';
import { useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Text,
  Image,
  ModalCloseButton,
  Button
} from '@chakra-ui/react'

const LoungeCityScreen = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <ChakraProvider>
      <div onClick={onOpen}>
        <video
        style={{ 
          objectFit: "cover",
          width:"100vw",
          height: "100vh",
          zIndex:"-1",
          top: "0",
          left: "0",
          position: "absolute",
        }}
        className="vdbg" loop autoPlay muted 
          src={loungeBg}
      >

      </video>
      <Modal onClose={onClose} isOpen={isOpen} isCentered bg="#000" color="#fff">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Aziy- Programming Intro</ModalHeader>
          <ModalCloseButton />
          <ModalBody mb={10}>
            <Flex justifyContent={"center"}>
            <Image src={pc}/>
            </Flex>
            <Text>
             
              Introduction to programming teaches you the fundamental building blocks to create computer programs. It involves learning how to give clear, step-by-step instructions (code) to a computer, telling it what tasks to perform in a specific order. Imagine it like writing a recipe for a computer to follow. By mastering the basics, like variables, data types, and control flow, you'll unlock the ability to design interactive games, websites, applications, and so much more!
            </Text>
            
            <Heading as={"h2"} mb={10}>Welcome to Aziy! You hav Unlocked your first collectible</Heading>
            <Image src={rookImg} width={"30%"}/>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
            <Button as={Link} href="/profile"  colorScheme='blue' ml={3} >Add to Collection</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </div>
      </ChakraProvider>
  )
}

export default LoungeCityScreen
