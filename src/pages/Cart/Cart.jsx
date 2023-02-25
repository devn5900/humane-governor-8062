import React,{useEffect, useState} from 'react'
import EmptyCart from './EmptyCart'
import {Link, useNavigate} from 'react-router-dom'
import boogylogo from '../../images/boogylogo.png'
import { 
    Box,
    Image,
    Text,
    Button,
    Divider,
    Center
} from '@chakra-ui/react'


const Cart =  () => {
    const [data,setData]= useState( []);
  const Navigate = useNavigate()

    const [islog,setisLog]=useState( JSON.parse(localStorage.getItem('loggedInUser')))

    let loginuser = JSON.parse(localStorage.getItem('loggedInUser'))
    console.log("loginuser:",loginuser.name)
   
    if(!islog?.isLogged){
        Navigate('/login');
    }
    useEffect(()=>{
       const us=JSON.parse(localStorage.getItem('loggedInUser'));
       setData(us.cartItem)
    },[])

    
    let total=0;
    let discount=0;
    let subtotal=0;
    
    if(data.length>0){
        
        data?.forEach((el)=>{
            total+=el.price;
            let x=Math.floor(el.price/8)
            discount += x
            subtotal=total-discount
            console.log("total:",total)
        })
    }
    else
    {
        // console.log('empty data')
        return <EmptyCart/>
    }

  return (
    <Box >
        <Box display='flex' p='2'  justifyContent='space-between' >
          <Link to="/">
            <Image src={boogylogo} alt='logo' w={"7rem"} ml={40}/>
          </Link>
          <Box mr={40}>
            <Text fontSize={'12'}>Signed In as</Text>
            <Text fontSize={'14'} as='b'>{loginuser.name}</Text>
          </Box>
        </Box>

        <Divider borderColor='grey' mt='2'/>

        <Box 
        display='flex'gap='2%' w='75%' m='auto' mt='8' 
        // border='2px solid black'
         >
            {/* right div */}
            <Box 
            //  border='2px solid red'
              w='58%' m='auto'   >
                <Box mb='6'>
                    <Text fontSize='lg' letterSpacing={1}><span style={{fontWeight:'bold'}}>My Bag</span> {data.length} item(s)</Text>
                </Box>
                
                <Box bg='rgb(252, 255, 238)' display='flex' gap='2' h='10' p='6'  alignItems='center'  mb='5'>
                    <Image src='https://images.bewakoof.com/web/Red-truck.png/' alt='img' w='6' h='3' />
                    <Text fontSize='12' letterSpacing={0.5}>Yay! You get FREE delivery on this order</Text>
                </Box>
                
                <Box>

                    {/* map data */}

                    {data.map((el,id)=>(
                        <Box 
                        key={el.id} 
                        border="1px solid #d8d4d4" p='2' mb='5' borderRadius={5} >
               

                            <Box  display='flex'  justifyContent='space-around' mb='5'>
                                <Box  w='100%' letterSpacing={0.8}>
                                    <Text color='grey'  mb='1'>
                                        {/* Men's Sky Yellow Tape Shirt */}
                                        {el.name}</Text>
                                    <Text><span style={{fontWeight:'bold'}}>
                                        ₹{el.price}</span> <span style={{textDecorationLine: 'line-through', fontSize:'12px'}}>{el.discount}</span></Text>
                                    <Text color='#1d8802' mb='5'>You saved ₹{Math.floor(el.price/8)}!</Text>
                                    <Box display='flex' gap='5'>
                                        <Box justifyContent='center' textAlign='center' alignItems='center' w='16' h='8' border='1px solid grey' p='2' borderRadius='5' bg='white' fontSize='10'>Size : <span style={{flexWeight:'bold'}}>M</span>
                                            {/* add modal-93 */}
                                        </Box>
                                    
                                        
                                        <Box justifyContent='center' textAlign='center' alignItems='center' w='16' h='8' border='1px solid grey' p='2' borderRadius='5' bg='white' fontSize='10'>Qty : <span style={{flexWeight:'bold'}}>1</span>
                                            {/* add modal-98 */}
                                            

                                        </Box>
                                    </Box>
                                </Box>
                                <Box w='25%' >
                                    <Image src={el.image} alt='img' w='10rem' h='9rem' borderRadius='6'/>
                                </Box>
                            </Box>
                            
                            <Divider borderColor='#eae5e5'/>

                            <Box  display='flex' mt='5'>
                                <Box justifyContent='center' textAlign='center' alignItems='center' w='35%' bg='white' border='0.5px solid #eae5e5' p='3' borderRadius='0px'>Remove</Box>
                                <Box justifyContent='center' textAlign='center' alignItems='center' w='65%' bg='white' border='0.5px solid #eae5e5' p='3' borderRadius='0px'>Move to Wishlist</Box>
                            </Box>
                        </Box>
                    ))}
                </Box>

            </Box>

            {/* left div */}
            <Box w='40%' m='auto'  mt='0'>
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
                        <Box><Text>₹ {total} </Text></Box>
                    </Box>
                    <Box display='flex'  p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Shipping Charges </Text></Box>
                        <Box><Text >FREE </Text></Box>
                    </Box>
                    <Box  display='flex'  p='1'  letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2'>Bag Discount </Text></Box>
                        <Box><Text >- ₹{discount}</Text></Box>
                    </Box>
                    <Box  display='flex'  p='1' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box><Text ml='2' as='b' fontSize='md'>Subtotal </Text></Box>
                        <Box><Text >₹{subtotal}</Text></Box>
                    </Box>

                    <Divider borderColor='grey'/>

                    <Box  display='flex'  p='1' mt='2' letterSpacing={0.5} justifyContent='space-between' fontSize='12' >
                        <Box  w='15' ml='2'>Total <br/><span style={{fontSize:'16px',fontWeight:'bold',color:'#565454'}}>₹ {subtotal}</span></Box>
                        <Box color='white' w='70%' >
                            <Link to='/payment'>
                                <Button w='100%' p='6' bg='#42a2a2'>CONTINUE</Button>
                            </Link>
                        </Box>
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