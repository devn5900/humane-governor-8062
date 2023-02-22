import React from 'react'
import {
  Box,
  Text,
  Center,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  
} from "@chakra-ui/react";

import{
  ViewOffIcon,
  ViewIcon
}from '@chakra-ui/icons';

const Login = () => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  return (
    <Box alignItems='baseline' border='1px solid black' w='100%' h='633' mt='20' bg='linear(white 0%, orange.200 50%)'>
      <Box border='2px solid black' w='76%' h='605' m='auto' p='20' bg='white'>
        <Center>
          <Text fontSize='3xl' as='b' mb='14'>Log in to your account</Text>
        </Center>
        <Box w='50%' m='auto' >
          <Input variant='flushed' mb='16' placeholder='Email' _placeholder={{ opacity: 20, color: 'grey',  fontSize:'18' }}/>
          <InputGroup size='md'>
            <Input pr='4.5rem' type={show ? 'text' : 'password'} variant='flushed' placeholder='Password' _placeholder={{ opacity: 20, color: 'grey', fontSize:'18' }} />
          <InputRightElement width='4.5rem'>
            <Box h='1.8rem' size='md' onClick={handleClick}>
              {show ? <ViewOffIcon/> : <ViewIcon/>}
            </Box>
          </InputRightElement>
        </InputGroup>
        </Box>
        <Center>
          <Text color='#42a2a2' fontSize='lg' mt='20'>Forgot Password?</Text>
        </Center>
        <Box w='50%' m='auto' mt='14'>
          <Button w='100%' bg='#989898' color='white' p='30' fontSize='22' letterSpacing={1}>LOGIN</Button>
        </Box>
      </Box>
    </Box>
  )
}

export default Login