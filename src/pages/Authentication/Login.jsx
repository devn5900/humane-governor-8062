import React, { useState } from 'react'
import {useNavigate,Link} from 'react-router-dom'
import {
  Box,
  Text,
  Center,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  useToast
} from "@chakra-ui/react";

import{
  ViewOffIcon,
  ViewIcon
}from '@chakra-ui/icons';

import Loader from '../../components/Loader'
import { loginUser } from '../../utils/api';

const Login =  () => {
  const toast = useToast()
  const Navigate = useNavigate()
  const[user,setUser]=useState("");
  const [password,setPassword]=useState('')
  // const [isLogged,setIsLogged]=useState(true)
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  const [islog,setisLog]=useState( JSON.parse(localStorage.getItem('loggedInUser')))
 
 
  if(islog?.isLogged){
      // Navigate('/');
  }
  const handleSubmit =()=>{
        if(user===""||password===""){
          toast({
                      title: 'Incorrect login details. Please try again.',
                      position: 'top',
                      status: 'error',
                      duration: 5000,
                      isClosable: true,
                    })  
        }
        else{
            authLogin();
        }
  }
const authLogin=()=>{
      loginUser(user).then((res)=>{
        console.log(res);
        res={...res[0],isLogged:true};
        localStorage.setItem('loggedInUser',JSON.stringify(res));

        if(res[0].email !== user)
        {
          toast({
            title: 'Incorrect login details. Please try again.',
            position: 'top',
            status: 'error',
            duration: 5000,
            isClosable: true,
          }) 
        }

        Navigate('/')
      })
      setUser("");
      setPassword("");

      toast({
        title: 'Login Successfull',
        position: 'top',
        status: 'success',
        duration: 5000,
        isClosable: true,
      }) 
}
  return (
    <Box alignItems='baseline' w='100%' h='572' bgGradient='linear(to-b, white, orange.100, orange.100)' >
      <Box  w='76%' h='540' m='auto'  bg='white'>
        <Center>
          <Text fontSize='2xl' as='b' mb='10'>Log in to your account</Text>
        </Center>
        <Box w='50%' m='auto' >
          <Input variant='flushed' mb='16' value={user} onChange={(e)=>setUser(e.target.value)} placeholder='Email' _placeholder={{ opacity: 20, color: 'grey',  fontSize:'18' }}/>
          <InputGroup size='md'>
            <Input pr='4.5rem' type={show ? 'text' : 'password'} variant='flushed' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' _placeholder={{ opacity: 20, color: 'grey', fontSize:'18' }} />
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
        <Box w='50%' m='auto' mt='12' >
          <Button w='100%' bg='#989898' color='white' p='30' fontSize='22' letterSpacing={1} onClick={handleSubmit}>LOGIN</Button>
        </Box>
        <Center>
              <Text size='md' colorScheme='teal' fontSize='sm' mt='2'>Click here for 
                <Link to='/signup'><span style={{color:'#47cc82'}}>SignUp</span></Link>
              </Text>
            </Center>
      </Box>
    </Box>
  )
}

export default Login