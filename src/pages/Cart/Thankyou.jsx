import React from 'react'
import {Link} from 'react-router-dom'
import { 
    Box,
    Image,
    Text,
    Button,
    Divider,
} from '@chakra-ui/react'

import { StarIcon } from '@chakra-ui/icons'
import refer from '../../images/refer.png'

const Thankyou = () => {

  

  return  (
    <Box>
        <Box  w='80%' m='auto' alignItems='center' textAlign='center' mt='6'>
            <Box m='auto' w='35%'  mb='8'>
                <Image src='https://images.bewakoof.com/web/ic-order-success-bag-anime.gif' alt='img' w={"25rem"} mb='4' />
                <Text fontSize='lg' letterSpacing={1} mt='2' as='b'>Thank you for shopping!</Text>
                <Text fontSize='lg' letterSpacing={0.5} mt='1'>Your order has been placed.</Text>
            </Box>

            <Box border='1px solid #d6dbd8' mt='2' alignItems='left' textAlign='left' p='2' pl='4'>
                <Text fontSize='md' letterSpacing={1} mt='2' as='b'>Enjoying the Bewakoof® experience?</Text>
                <Text fontSize='sm' letterSpacing={0.5} mt='1'>Let us know how we are doing</Text>
                <Box display='flex' gap='12' m='auto' mt='6' mb='6' alignItems='center' w='30%' justifyContent='center'>
                    <StarIcon boxSize={7} color='#dbd6d6' />
                    <StarIcon boxSize={7} color='#dbd6d6' />
                    <StarIcon boxSize={7} color='#dbd6d6' />
                    <StarIcon boxSize={7} color='#dbd6d6' />
                    <StarIcon boxSize={7} color='#dbd6d6' />
                </Box>

            </Box>

            <Box  mt='4' alignItems='left' textAlign='left'  pl='4'>
                {/* <Text fontSize='sm' letterSpacing={1} mt='2' >Delivering to :</Text>
                <Text fontSize='md' letterSpacing={0.5} mt=''><span style={{fontWeight:'bold'}} >{loginuser.name} </span><span style={{color:'red',fontSize:'10px'}}>HOME</span></Text>
                <Text fontSize='sm' letterSpacing={1} mt='' >Gadge Nagar</Text>
                <Text fontSize='sm' letterSpacing={1} mt='' >Amravati India, 444602</Text> */}

                <Divider borderColor='grey' w='101%' mt='8' mb='5' ml='-4'/>

            </Box>

            <Box m='auto' w='100%' mt='4' >
                <Image src={refer} w={"100%"} alt='img'/>
            </Box>

            <Link to="/">
                <Button border='1px solid grey' mt='16' w='20rem' color='black' bg='rgb(255, 210, 50)' fontSize='20' h='12'>Continue Shopping</Button>
            </Link>

        </Box>
    </Box>
  )
}

export default Thankyou