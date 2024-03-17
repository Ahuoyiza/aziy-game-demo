import React from 'react';
import { Box, Flex, IconButton, Link, Image} from '@chakra-ui/react';
import { FaUserAstronaut } from "react-icons/fa";
import aziyLogo from '../../assets/Aziy-logo.svg'; 

const Nav = () => {
  return (
    <Box display="flex" justifyContent="space-between" alignItems="center" py={4} px={"3em"} bg={"#001826"}>
      <Link to="/">
        <Image src={aziyLogo} alt="Aziy Logo" boxSize="70px" />
      </Link>
      <Flex>
        <IconButton cursor={"pointer"} as={Link} href="/profile" color={"#ff743f"} fontSize={"2em"} icon={<FaUserAstronaut />} aria-label="Profile" />
      </Flex>
    </Box>
  );
};

export default Nav;
