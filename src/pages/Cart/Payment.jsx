import React,{useEffect} from 'react'
import EmptyCart from './EmptyCart'
import {Link} from 'react-router-dom'
import boogylogo from '../../images/boogylogo.png'
import { 
    Box,
    Image,
    Text,
    Button,
    Divider,
    Center
} from '@chakra-ui/react'

const Payment = () => {
  return (
    <Box >
        <Box p='2'>
          <Link to="/">
            <Image src={boogylogo} alt='logo' w={"7rem"} ml={40}/>
          </Link>
          <Divider borderColor='grey' mt='2'/>
        </Box>

        

        <Box 
        display='flex'gap='2%' w='75%' m='auto' mt='8' 
        // border='2px solid black'
         >
            {/* right div */}
            <Box 
             border='2px solid red'
              w='58%' m='auto'   >
                <Box mb='6'>
                    <Text fontSize='lg' letterSpacing={1}><span style={{fontWeight:'bold'}}>My Bag</span> data.length item(s)</Text>
                </Box>
                
                <Box bg='rgb(252, 255, 238)' display='flex' gap='2' h='10' p='6'  alignItems='center'  mb='5'>
                    <Image src='https://images.bewakoof.com/web/Red-truck.png/' alt='img' w='6' h='3' />
                    <Text fontSize='12' letterSpacing={0.5}>Yay! You get FREE delivery on this order</Text>
                </Box>
                
                <Box>

                    

                    
                </Box>

            </Box>

            {/* left div */}
            <Box w='40%' m='auto'  mt='0'>
                <Box  mt='12' p='3'  borderRadius='6'> 
                    <Text letterSpacing={0.8} fontSize='14'>Delivering order to <span style={{fontWeight:'bold'}}>Omkareshwari Khupse</span> Amravati, Maharashtra, 444603</Text>
                </Box>

                <Divider borderColor='grey'/>

                <Box  mt='2' mb='2' borderRadius='6' justifyContent='center' alignItems='center' >
                    <Text as='b' pl='3'>You are paying for these items</Text>
                    <Text letterSpacing={0.3} fontSize='12' p='1' pl='3' >Men's Blue The Panda Way Graphic Printed Oversized T-shirtMen's Blue The Panda Way Graphic Printed Oversized T-shirt Estimated delivery by 05 March 2023</Text>
                </Box>

                <Divider borderColor='grey'/>

                <Box mt='4' border='1px solid #e2dede'>
                    
                    <Box p='2'  mt='1' mb='4'>
                        <Text as='b' fontSize='14' letterSpacing={0.5} ml='2'>PRICE SUMMARY</Text>
                    </Box>
                    <Box  display='flex' p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12'>
                        <Box><Text ml='2'>Total MRP (Incl. of taxes) </Text></Box>
                        <Box><Text>₹ total </Text></Box>
                    </Box>
                    <Box display='flex'  p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Shipping Charges </Text></Box>
                        <Box><Text >FREE </Text></Box>
                    </Box>
                    <Box  display='flex'  p='1'  letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Discount on MRP </Text></Box>
                        <Box><Text >- ₹discount</Text></Box>
                    </Box>

                    <Divider borderColor='grey'/>

                    <Box  display='flex'  letterSpacing={0.5} justifyContent='space-between' textAlign='center' alignItems='center' fontSize='12' >
                        <Box   ml='2'><span style={{fontSize:'16px',fontWeight:'bold',color:'#565454'}}>Final amount </span></Box>
                        <Text  as='b' fontSize='16px'>₹599</Text>
                        
                    </Box>
                    <Box display='flex' gap='20' m='auto' mt='8' justifyContent='space-evenly' pl='5' pr='5' alignItems='center' fontSize='8' textAlign='center'>
                        <Box >
                            <Box  w='12' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/cart-badge-trust.svg' alt='img' w='10' h='10'/>
                            </Box>
                            <Text>100% SECURE PAYMENTS</Text>
                        </Box>
                        <Box >
                            <Box  w='10' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='img' w='10' h='10'/>
                            </Box>
                            <Text>EASY RETURNS & QUICK REFUNDS</Text>
                        </Box>
                        <Box >
                            <Box w='10' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/quality-check.svg' alt='img' w='10' h='10'/>
                            </Box>
                            <Text>QUALITY ASSURANCE</Text>
                        </Box>
                    </Box>

                    <Box display='flex' gap='20' m='auto' mt='8' justifyContent='space-evenly' pl='5' pr='5' alignItems='center' fontSize='8' textAlign='center'>
                        <Box >
                            <Box  w='12' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/google-pay-logo.svg' alt='img' w='5' h='5'/>
                            </Box>
                        </Box>
                        <Box >
                            <Box  w='10' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/cart-easy-return.svg' alt='img' w='5' h='5'/>
                            </Box>
                        </Box>
                        <Box >
                            <Box w='10' m='auto' justifyContent='center'>
                                <Image src='https://images.bewakoof.com/web/quality-check.svg' alt='img' w='5' h='10'/>
                            </Box>
                        </Box>
                    </Box>
                </Box>

            </Box>
        </Box>

        <Box w='75%' m='auto' mt='10%'>
            {/* <Box border='2px solid red' w='20%'> */}
                <Center>
                    <Image src='https://images.bewakoof.com/web/secure-payments-image.png' alt='img' w='18rem' h='6'/>
                </Center>
            {/* </Box> */}
            
        </Box>




    </Box>
  )
}

export default Payment