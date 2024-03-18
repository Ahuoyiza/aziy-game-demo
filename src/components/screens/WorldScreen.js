// import { useDisclosure } from '@chakra-ui/react';
import mapBg from '../../assets/map-bg.mp4';
import {Link,} from '@chakra-ui/react'

const WorldScreen = () => {


  return (
    <div>
      <Link href='/lounge'>
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
      src={mapBg}></video>
      
      </Link>
    </div>
  )
}

export default WorldScreen
