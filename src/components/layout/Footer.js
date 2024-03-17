// import React, { useState, useEffect } from 'react';
import { Flex, IconButton, Tooltip, Link} from '@chakra-ui/react';
import { FaMapMarkerAlt, FaVolumeUp,  } from 'react-icons/fa';
import { GiSoundOn } from "react-icons/gi";
// import { AiOutlineInfoCircle } from 'react-icons/ai';
import {ChatIcon} from '@chakra-ui/icons'

const Footer = () => {
  // const [isMuted, setIsMuted] = useState(false);
  // const [audioRef, setAudioRef] = useState(null);
  // const { isOpen, onToggle } = useDisclosure();

  // const handleSoundClick = () => {
  //   setIsMuted(!isMuted);
  //   if (audioRef) {
  //     if (isMuted) {
  //       audioRef.pause();
  //     } else {
  //       audioRef.play();
  //     }
  //   }
  // };

  // useEffect(() => {
  //   // Simulate fetching or creating an audio element
  //   const audio = new Audio('path/to/your/game_audio.mp3'); // Replace with your audio path
  //   setAudioRef(audio);

  //   // Clean up audio on component unmount
  //   return () => {
  //     if (audioRef) {
  //       audioRef.pause();
  //       audioRef.currentTime = 0; // Reset audio time on unmount
  //     }
  //   };
  // }, []);

  return (
    <Flex color={"#1de9fa"}justifySelf={"flex-end"} justifyContent="space-between" alignItems="center" fixed="bottom" py={"2em"} px={"3em"} bg={"#001826"}>
      <IconButton color={"#1de9fa"}   fontSize={"2em"}  as={Link} href="/map" icon={<FaMapMarkerAlt />} />
     
        <Tooltip color={"#fff"} label={"Level 1: Beginner. Learn basic coding concepts." }>
         <ChatIcon  fontSize={"2em"} />
        </Tooltip>
        <IconButton
          border={"none"}outline={"none"}
          bg={"#001826"}
          color={"#1de9fa"}
          icon={<GiSoundOn />}
          fontSize={"3em"}
        
          // aria-label={isMuted ? 'Unmute Sound' : 'Mute Sound'}
          // onClick={handleSoundClick}
        />
    </Flex>
  );
};

export default Footer;
