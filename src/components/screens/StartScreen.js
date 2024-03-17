import { Flex, Image } from "@chakra-ui/react";
import mainChar from '../../assets/main-character.svg'
import Layout from "../layout/Layout";
const StartScreen = () => {
  return (
    <Layout>
      <Flex minH={"80vh"} bg={"#001826"}>
        <Image src={mainChar} />
      </Flex>
    </Layout>
  )
}

export default StartScreen
