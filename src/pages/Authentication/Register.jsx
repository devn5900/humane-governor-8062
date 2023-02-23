import React,{useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import { 
    Box,
    Image,
    Stack,
    Text,
    Center,
    Grid,
    GridItem,
    Button,
    Divider,
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverBody,
    Input,
    useToast
} from '@chakra-ui/react'

const Register = () => {
    const Navigate = useNavigate()
    const toast = useToast()
    const[mobile,setMobile]=useState('')

    const handleNumber=()=>{
        console.log(mobile)
        localStorage.setItem('Mobile',JSON.stringify(mobile))
        if(!mobile)
        {
            toast({
                title: 'Mobile Number is required',
                position: 'top',
                status: 'error',
                duration: 5000,
                isClosable: true,
              })
        }
        if(mobile!=="")
        {
            Navigate('/signup')
        }
    }

  return (
    <Box display='flex' w='100%'  borderRadius='lg' overflow='hidden'  >
        <Box alignItems='baseline' w='50%'  bgGradient='linear(to-b, white, orange.100, orange.100)' >
            <Stack>
                <Center>
                    <Text fontSize='3xl' as='b' mt={4} mb={-7} letterSpacing={2}>Welcome to the world of Bewakoof®!</Text>
                </Center>
            </Stack>
            <Center>
                <Image bg='transparent' mt={32} p='8'   src='https://images.bewakoof.com/web/group-19-1617704502.png' alt='img' w='95%' h='408'/>
            </Center>
        </Box>
        <Box w='50%'  >
            <Grid textAlign='center' mt={3}  letterSpacing={1} >
                <GridItem  fontSize='2xl' as='b'  >Log in / Sign up</GridItem>
                <GridItem  fontSize='lg' mt={3}  color='#a0a0a0'>for Latest trends, exciting offers and everything Bewakoof®!</GridItem>
            </Grid>
            <Box  mt='16'  >
                <Box w='55%' display='flex' gap='4' m='auto' border='1px solid #a0a0a0' p='3' borderRadius='5'>
                    <Popover>
                        <PopoverTrigger>
                            <Button fontSize='18' letterSpacing={2} color='grey' borderRadius='none'><Image src='https://images.bewakoof.com/web/india-flag-round-1639566913.png' alt='img' w='5' h='5'/>+91</Button>
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
                    <Input variant='unstyled' type='number' value={mobile} onChange={(e)=>{setMobile(e.target.value)}} placeholder='Enter Mobile Number' _placeholder={{ opacity: 20, color: 'grey', fontWeight:'bold', fontSize:'20' }}  />
                    {/* Added field required alert msg */}
                </Box>
                <Box w='55%' m='auto' mt='4'>
                    <Button w='100%' bg='#42a2a2' color='white' p='30' fontSize='22' letterSpacing={1} onClick={handleNumber} >CONTINUE</Button>
                </Box>
                <Box display='flex' gap='2'  w='64%' m='auto' mt='6' mb='6'>
                    <Divider h='3' borderColor='grey.100'/> 
                    <Text>OR</Text>
                    <Divider h='3' borderColor='grey.100'/>
                </Box>
                <Link to={'/login'}>
                    <Box p='2' borderRadius='5' justifyContent='center' m='auto' display='flex' bg='white' border='1px solid grey' fontWeight='bold' color='#5b5959' w='55%'><Image src='https://images.bewakoof.com/web/carbon-email-1620039620.png' alt='icon img' w='5' h='5' mr='3' mt='1'/> CONTINUE WITH EMAIL</Box>
                </Link>
                <Box m='auto' mt='5' display='flex' gap='2' w='55%' mb='8'>
                    <Box p='2' borderRadius='5' w='50%' justifyContent='center' display='flex' border='1px solid grey' bg='white' fontWeight='bold' color='#5b5959'><Image src='https://images.bewakoof.com/web/group-3-2x-1558356035.png' alt='icon img' w='5' h='5' mr='3' mt='1'/> GOOGLE</Box>
                    <Box p='2' borderRadius='5' w='50%' justifyContent='center' display='flex' border='1px solid grey' bg='white' fontWeight='bold' color='#5b5959'><Image src='https://images.bewakoof.com/web/bi-facebook2x-1620886445.png' alt='icon img' w='5' h='5' mr='3' mt='1'/> FACEBOOK</Box>
                </Box>
                <Box w='55%' m='auto' >
                    <Text fontSize='13'>By creating an account or logging in, you agree with Bewakoof®'s <span style={{color:'#42a2a2', fontWeight:'bold'}} >Terms and Conditions</span> and <span style={{color:'#42a2a2', fontWeight:'bold'}}>Privacy Policy</span>.</Text>
                </Box>
            </Box>
            
        </Box>
    </Box>  

      
    
  )
}

export default Register