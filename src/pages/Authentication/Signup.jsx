import React,{useState} from 'react'
// import {useHistory} from 'react-router-use-history';
// import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import { 
    Box,
    Image,
    Text,
    Center,
    Button,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Input,
    InputGroup,
    InputRightElement,
    Checkbox,
    useToast
} from '@chakra-ui/react'

import{
  ViewOffIcon,
  ViewIcon
}from '@chakra-ui/icons';

const Signup = () => {
  const toast = useToast()
  const Navigate = useNavigate()
  const[name,setName]=useState('');
  const[password,setPassword]=useState('')
  const[email,setEmail]=useState('')
  const[avatar,setAvatar]=useState('');
  const[cartItem,setCartItem]=useState([])
  // const History=useHistory()
  // const[mobile,setMobile]=useState('')
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)
  let isLogged=false;

  const mobile=JSON.parse(localStorage.getItem('Mobile'));
  console.log("mobile:",mobile)

  const isValided = ()=>{
    
    
    if (!name && !email && !password) 
    {
      toast({
        title: 'All fields are required',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }) 
      isLogged=false;
    }
    else if (!name ) 
    {
      toast({
        title: 'Name is required',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }) 
      isLogged=false;
    }
    else if (!email ) 
    {
      toast({
        title: 'Email is required',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }) 
      isLogged=false;
    }
    else if (!password ) 
    {
      toast({
        title: 'Password is required',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }) 
      isLogged=false;
    }
    return isLogged
  }

  async function Proceed (){
    
    let items ={name,email,password,avatar,isLogged,cartItem};
    if(isValided())

    console.log('item',items)
    // https://busy-jade-mussel-sock.cyclic.app/signup
    try
    {
      const res= await fetch(`http://localhost:8080/signup`,{
      method:"POST",
      body:JSON.stringify(items),
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
      })
      let data=await res.json();
      console.log("data:",data)

      localStorage.setItem("sign-user",JSON.stringify(data))
      // History.push('/')
      if(name!=='' || email!=='' || password!=='')
      {
        toast({
          title: 'Registration Successfull',
          position: 'top',
          status: 'success',
          duration: 5000,
          isClosable: true,
        }) 
        Navigate('/')
      }
      console.log(name,email,password)
    }
    catch(err)
    {
      toast({
        title: 'Failed',
        position: 'top',
        status: 'error',
        duration: 5000,
        isClosable: true,
      }) 
      console.log('error')
    }
  }

  return (
    <Box alignItems='baseline' w='100%' h='572' bgGradient='linear(to-b, white, orange.100, orange.100)'  >
      <Box  w='76%' h='542' m='auto' p='10'  display='flex' gap='10'>
        <Box  w='50%' h='auto' mt='-8' >
          <Center>
            <Image bg='transparent'  src='https://images.bewakoof.com/web/desktop-sign-up-banner--1623760676.png' alt='img' w='65%' h='470'/>
          </Center>
        </Box>

        <Box  w='55%' h='540' m='auto' mt='-8' bg='white' >
          <Box  w='80%' pl='24' justifyContent='left' display='grid' gridTemplateColumns='2' gap='2' color='#333'>
            <Text letterSpacing={0.5} fontSize='3xl' as='b' >Sign Up</Text>
            <Text letterSpacing={0.5} fontSize='lg' as='b' mb='5'>Hi new buddy, let's get you started with the bewakoofi!</Text>
          </Box>
          <Box w='65%' m='auto' >
            <Input variant='flushed' mb='5' letterSpacing={0.5} value={name}  onChange={(e)=>setName(e.target.value)} placeholder='Name' _placeholder={{ opacity: 20, color: 'grey',  fontSize:'16' }}/>
            <Box display='flex' gap='4'>
              <Popover>
                  <PopoverTrigger>
                    <Button fontSize='14' h='7' mt='2' color='grey' borderRadius='none'><Image src='https://images.bewakoof.com/web/india-flag-round-1639566913.png' alt='img' w='4' h='4'/>+91</Button>
                  </PopoverTrigger>
                  <PopoverContent w='30'>
                      <PopoverBody display='grid' gridTemplateColumns='200 150 150 150'>
                        <Button bg='white' ><Image src='https://images.bewakoof.com/web/india-flag-round-1639566913.png' alt='img' w='5' h='5'/>+91</Button>
                        <Button bg='white'><Image src='https://images.bewakoof.com/web/uae-flag-round-1639566914.png' alt='img' w='5' h='5'/>+971</Button>
                        <Button bg='white'><Image src='https://images.bewakoof.com/web/US.png' alt='img' w='5' h='5'/>+1</Button>
                        <Button bg='white'><Image src='https://images.bewakoof.com/web/CANADA.png' alt='img' w='5' h='5'/>+1</Button>
                      </PopoverBody>
                  </PopoverContent>
              </Popover>
              <Input variant='flushed' type='number' mb='4' value={mobile}  placeholder='' _placeholder={{ opacity: 20, color: 'grey', fontSize:'16' }}  />
              {/* Added field required alert msg */}          
            </Box>        
            
            <Input variant='flushed' mb='4' letterSpacing={0.5} placeholder='Email' value={email}  onChange={(e)=>setEmail(e.target.value)} _placeholder={{ opacity: 20, color: 'grey',  fontSize:'16'  }}/>
            <InputGroup size='md'>
              <Input pr='4.5rem' type={show ? 'text' : 'password'} variant='flushed' mb='4' letterSpacing={0.5} value={password}  onChange={(e)=>setPassword(e.target.value)} placeholder='Password' _placeholder={{ opacity: 20, color: 'grey', fontSize:'16'  }} />
            <InputRightElement width='4.5rem'>
              <Box h='1.8rem' size='md' onClick={handleClick}>
                {show ? <ViewOffIcon/> : <ViewIcon/>}
              </Box>
            </InputRightElement>
          </InputGroup>
          </Box>
          {/* <Box w='65%' m='auto' > */}
            <Center>
              <Checkbox size='md' colorScheme='teal' defaultChecked fontSize='sm' mt='8'>
                I want to receive order updates on Whatsapp
              </Checkbox>
            </Center>
          {/* </Box> */}
          <Box w='65%' m='auto' mt='8' >
            {/* <Link to='/'> */}
              <Button w='100%' bg='#989898' color='white' p='30' fontSize='22' letterSpacing={1} onClick={Proceed}>PROCEED</Button>
            {/* </Link> */}
            <Center>
              <Text size='md' colorScheme='teal' fontSize='sm' mt='2'>
                Click here for <Link to='/login'color='teal'>login</Link>
              </Text>
            </Center>

          </Box>
          
        </Box>
      </Box>
      
    </Box>

  )
}

export default Signup