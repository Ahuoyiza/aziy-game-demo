import React from 'react';
import { Flex, Image , Box,  Heading,    } from "@chakra-ui/react";
import rookImg from "../../assets/rookie-card.png";
import mainChar from '../../assets/main-character.svg';
import Layout from '../layout/Layout';

const Profile = () => {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const blur = isHovered ? '8px' : '4px'; // Adjust blur intensity as needed
  const backgroundImage = `linear-gradient(
    to bottom,
    rgba(001, 001, 001, ${isHovered ? 0.2 : 0.1}) 0%,
    rgba(220, 225, 225, ${isHovered ? 0.1 : 0.08}) 100%
  )`;

  return (
    <Layout>
      <Flex minH={"80vh"} bg={"#001826"}  pr={10}>
        <Image src={mainChar} flex={1} />

        <Box
        flex={2}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      as="article"
      borderRadius="lg"
      border={"0.07px solid #757573"}
      cursor={"pointer"}
      overflow="hidden"
      height={"70vh"}
      bgImage={backgroundImage} 
      bgPos="center"
      bgSize="cover"
      color={"#fff"}
      paddingBottom={8}
      px={8}
      // {...props}
      style={{
        backdropFilter: `blur(${blur}) saturate(180%)`, // Apply blur and adjust saturation
      }}
    >
          <Box>
            <p>Rookie: Level 1</p>
          </Box>
          
         <Flex justifyContent={"center"} direction={"column"}>
         <Heading as={"h2"}>
          Your Collection
         </Heading>
         <Image src={rookImg} width={"30%"} />

         </Flex>
        </Box>
     

      </Flex>
    </Layout>
  )
}

export default Profile
