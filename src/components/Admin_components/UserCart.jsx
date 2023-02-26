import { AvatarBadge, Box, Card, CardHeader, Flex, Text , Heading, Button, IconButton, CardBody, Divider, CardFooter, Avatar } from '@chakra-ui/react'
import React from 'react'

import {AiOutlineShoppingCart,AiOutlineDelete,AiOutlineMail} from 'react-icons/ai'
import { BsRecord2,BsTelephoneInbound,BsThreeDotsVertical } from 'react-icons/bs'

const UserCard = ({id , name , avatar , email, isLogged , cartItem}) => {
  console.log("cartItem" , cartItem)
  return (
    <Card maxW='4xl' paddingX={3}  mt={30}boxShadow='md' w="100%" 
    
    >
    <CardHeader>
      <Flex spacing='4'  >
        <Flex flex='1' gap='4' alignItems='center'flexWrap='wrap'>
         {isLogged? <Avatar name={`${name}`} size={'lg'} >
          <AvatarBadge boxSize='1em' bg='green.500' />
          </Avatar>: <Avatar name={`${name}`}  size={'lg'} >
          <AvatarBadge boxSize='1em' bg='red.500' />
          </Avatar>}
          <Box textAlign={'left'}>
            <Heading ml={4} size='md' fontWeight={'semibold'} >{name}</Heading>
            <Button  fontSize={18} fontWeight={'normal'} bg={'none'} leftIcon={<AiOutlineMail/>} >  {email}</Button>
            
          </Box>
          
        </Flex>
        <IconButton
          variant='ghost'
          colorScheme='gray'
          aria-label='See menu'
          icon={<BsThreeDotsVertical />}
        />
        
      </Flex>
    </CardHeader>
    <CardBody>
    </CardBody>
   <Divider/>
    <CardFooter
      justify='space-between'
      flexWrap='wrap'
      sx={{
        '& > button': {
          minW: '146px',
          maxW:'160px'
        },
      }}
    >
      <Button flex='1' _hover={{color:'black',backgroundColor:'yellow.500'}} variant='ghost' leftIcon={<AiOutlineShoppingCart />}>
        Cart : {cartItem.length}
      </Button>
      <Button flex='1' _hover={{color:'black',backgroundColor:'yellow.500'}} variant='ghost' leftIcon={<BsRecord2 />}>
        Order
      </Button>
      <Button flex='1' _hover={{color:'black',backgroundColor:'yellow.500'}} variant='ghost' leftIcon={<AiOutlineDelete />} >
        Delete
      </Button>
    </CardFooter>
  </Card>
  )
}

export default UserCard