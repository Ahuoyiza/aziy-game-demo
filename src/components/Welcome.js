import { Button, Flex, Link } from "@chakra-ui/react";
import startScBg from "../assets/start-bg.mp4";


const Welcome = () => {
  return (
    <Flex>
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
      className="vdbg" loop autoPlay muted src={startScBg} ></video>
      <div style={{position:"absolute", left:"80%", top:"80%"}}>
      <Button 
      as={Link}
      href="/start"
      style={{
        width: "8em",
        outline: "0.1px solid #1de9fa",
        background: "none",
        color: "#ffff",
        border: "none",
        cursor: "pointer",
        padding: "10px 0",
        fontSize: "2em",
       textDecoration:"none"
      }}>Play</Button>
      </div>

    </Flex>
  )
}

export default Welcome
