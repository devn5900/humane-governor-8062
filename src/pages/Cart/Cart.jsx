import React,{useDisclosure,useEffect} from 'react'
import EmptyCart from './EmptyCart'
import {Link} from 'react-router-dom'
import boogylogo from '../../images/boogylogo.png'
import { 
    Box,
    Image,
    Text,
    Button,
    Divider,
    Center,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'


const Cart = async () => {
    // const { isOpen, onOpen, onClose } = useDisclosure()
// let data=[]
    const getData = async ()=>{
         try
        {
            const res = await fetch(`http://localhost:8080/cart`)
            const data = await res.json();
            console.log('Data:',data)
            localStorage.setItem('cartData',JSON.stringify(data))
        }
        catch(err)
        {
            console.log('Fetching error',err)
        }
    }
   
    useEffect(()=>{
        getData()
    },[])

    let data=JSON.parse(localStorage.getItem('cartData'))

   if(data.length===0)
   {
     return <EmptyCart/>
   }

  return (
    <Box>
        <Box p='2'>
          <Link to="/">
            <Image src={boogylogo} alt='logo' w={"7rem"} ml={40}/>
          </Link>
        </Box>

        <Divider borderColor='grey'/>

        <Box 
        display='flex'gap='2%' w='75%' m='auto' mt='8' h='600'
        // border='2px solid black'
         >
            {/* right div */}
            <Box
            //  border='2px solid black'
              w='58%' m='auto'  h='600' >
                <Box mb='6'>
                    <Text fontSize='lg' letterSpacing={1}><span style={{fontWeight:'bold'}}>My Bag</span> "2" item(s)</Text>
                </Box>
                
                <Box bg='rgb(252, 255, 238)' display='flex' gap='2' h='10' p='6'  alignItems='center'  mb='5'>
                    <Image src='https://images.bewakoof.com/web/Red-truck.png/' alt='img' w='6' h='3' />
                    <Text fontSize='12' letterSpacing={0.5}>Yay! You get FREE delivery on this order</Text>
                </Box>
                
                <Box border='2px solid red'>

                    {/* map data */}

                    {/* {data.map((el,id)=>( */}
                         <Box  border="1px solid grey" p='2' mb='5'>

                            <Box border="1px solid blue" diplay='flex' gap='20'>
                                <Box border="1px solid yellow">
                                    {/* <Text>{el.brand}</Text> */}
                                    {/* <Text>₹{el.price}{" "}{el.strike}</Text> */}
                                    {/* <Text>You saved ₹ ({el.prize}-{el.strike}) !</Text> */}
                                    <Box>
                                        <Button>Size : <span style={{flexWeight:'bold'}}>M</span>
                                            {/* <Modal isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent>
                                                <ModalHeader>Select Size</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Button>S</Button>
                                                    <Button>M</Button>
                                                    <Button>L</Button>
                                                    <Button>XL</Button>
                                                    <Button>2XL</Button>
                                                    <Button>3XL</Button>
                                                </ModalBody>
                                                </ModalContent>
                                            </Modal> */}
                                        </Button>
                                    
                                        
                                        <Button>Qty : <span style={{flexWeight:'bold'}}>1</span>
                                            {/* <Modal isOpen={isOpen} onClose={onClose}>
                                                <ModalOverlay />
                                                <ModalContent>
                                                <ModalHeader>Select Quantity</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <Button>1</Button>
                                                    <Button>2</Button>
                                                    <Button>3</Button>
                                                    <Button>4</Button>
                                                    <Button>5</Button>
                                                    <Button>6</Button>
                                                    <Button>7</Button>
                                                    <Button>8</Button>
                                                    <Button>9</Button>
                                                    <Button>10</Button>
                                                </ModalBody>
                                                </ModalContent>
                                            </Modal> */}
                                        </Button>
                                    </Box>
                                </Box>
                                <Box border="1px solid yellow">
                                    {/* <Image src={el.image} alt='img' w='20' h='20' borderRadius='5'/> */}
                                </Box>
                            </Box>
                            
                            <Box border='2px solid blue' display='flex'>
                                <Button>Remove</Button>
                                <Button>Move to Wishlist</Button>
                            </Box>

                        </Box>
                    {/* ))} */}

                </Box>

            </Box>

            {/* left div */}
            <Box w='40%' m='auto'  h='600'>
                <Box  mt='12' p='3' bg='#fdd835' borderRadius='6'>
                    <Text letterSpacing={0.8}>Save extra <span style={{fontWeight:'bold'}}>₹39</span> with <span style={{fontWeight:'bold'}}>TriBe</span></Text>
                </Box>

                <Box border='1px solid #e2dede' mt='4' borderRadius='6' justifyContent='center' alignItems='center' >
                    <Text letterSpacing={1} fontSize='sm' p='1' pl='3' >Whistles! Get extra 20% Cashback on prepaid orders above Rs.499. Coupon code - NEW20. Applicable for new customers only!</Text>
                </Box>

                <Box mt='4' border='1px solid #e2dede'>
                    <Box display='flex' justifyContent='space-between' m='1.5' p={0.5} borderRadius='6' color='#42a2a2' bg='#ecf6f5' fontSize='14'>
                        <Box pl='2'><Text>Apply Coupon / Gift Card / Referral</Text></Box>
                        <Box pr='2'><Text>Redeem </Text></Box>
                    </Box>
                    <Box border='1px solid #e2dede'p='2' bg='#ebebeb' mt='1' mb='4'>
                        <Text as='b' fontSize='12' letterSpacing={0.5} ml='2'>PRICE SUMMARY</Text>
                    </Box>
                    <Box  display='flex' p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12'>
                        <Box><Text ml='2'>Total MRP (Incl. of taxes) </Text></Box>
                        <Box><Text>₹1499 </Text></Box>
                    </Box>
                    <Box display='flex'  p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Shipping Charges </Text></Box>
                        <Box><Text >FREE </Text></Box>
                    </Box>
                    <Box  display='flex'  p='1'  letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Bag Discount </Text></Box>
                        <Box><Text >- ₹951</Text></Box>
                    </Box>
                    <Box  display='flex'  p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2' as='b' fontSize='md'>Subtotal </Text></Box>
                        <Box><Text >₹548</Text></Box>
                    </Box>

                    <Divider borderColor='grey'/>

                    <Box  display='flex'  p='1' mt='2' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box  w='15' ml='2'>Total <br/><span style={{fontSize:'16px',fontWeight:'bold',color:'#565454'}}>₹ 548</span></Box>
                        <Box color='white' w='70%' ><Button w='100%' p='6' bg='#42a2a2'>ADD ADDRESS</Button></Box>
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

export default Cart