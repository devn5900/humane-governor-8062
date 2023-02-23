import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import pageloader from "../images/pageloader.gif"

const Loader = () => {
  return (
    <Box>
        <Image src={pageloader} alt='loading' w={120}></Image>
    </Box>
  )
}

export default Loader