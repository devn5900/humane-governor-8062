import React, { useState } from 'react';
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText
} from '@chakra-ui/react';
import BeatLoader from "react-spinners/BeatLoader";
import { useToast } from '@chakra-ui/react';
import AdminNavbar from '../../components/Admin_components/AdminNavbar';
import {useDispatch} from 'react-redux';

import { PostAccessoriesData, PostMenData, PostWomenData } from '../../Redux/Admin/Admin.action';



const Form1 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Product Details
      </Heading>
      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="title" fontWeight={500}>
            Title
          </FormLabel>
          <Input id="first-name" placeholder="Enter Product Name" value={productDetails.name} onChange={(e)=>setProductDetails({...productDetails,name:e.target.value})} />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="brand" fontWeight={500}>
            Brand
          </FormLabel>
          <Input id="last-name" placeholder="Enter Brand Name" value={productDetails.brand} onChange={(e)=>setProductDetails({...productDetails,brand:e.target.value})}  />
        </FormControl>
      </Flex>
      <FormControl mt="2%">
        <FormLabel htmlFor="type"  fontWeight={500}>
          Category
        </FormLabel>
        <Select
          id="type"
          autoComplete="type"
          placeholder="Select Category"
          focusBorderColor="brand.400"
          shadow="sm"
          size="md"
          w="full"
          value={productDetails.type} onChange={(e)=>setProductDetails({...productDetails,type:e.target.value})} 
          rounded="md">
          <option value={"Men"} >Men</option>
          <option value={"Women"} >Women</option>
          <option value={"accessories"} >Accessories</option>
        </Select>
      </FormControl>

      <FormControl mt="2%">
        <FormLabel htmlFor="price"  fontWeight={500}>
          Price
        </FormLabel>
        <Input id="price" type="text" placeholder='Enter Price' value={productDetails.price} onChange={(e)=>setProductDetails({...productDetails,price:+e.target.value})}  />
      </FormControl>

    </>
  );
};

const Form2 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Additional Details
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Discount Rate
        </FormLabel>
        <Input
          type="text"
          id="city"
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          placeholder='Enter Discount Amount'
          rounded="md"
          value={productDetails.discount} 
          onChange={(e)=>setProductDetails({...productDetails,discount:e.target.value})}
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          type
        </FormLabel>
        <Input
          type="text"
          id="city" 
          autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          placeholder='Enter Type Of Product'
          rounded="md"
          value={productDetails.category} 
          onChange={(e)=>setProductDetails({...productDetails,category:e.target.value})}
        />
      </FormControl>

      
      

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]}>
          <FormLabel
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}
            mt="2%"
            >
            Image
          </FormLabel>
          <InputGroup size="sm">
            <InputLeftAddon
              bg="gray.50"
              _dark={{
                bg: 'gray.800',
              }}
              color="gray.500"
              rounded="md">
              https://
            </InputLeftAddon>
            <Input
              type="url"
              placeholder="Enter Image URL"
              focusBorderColor="brand.400"
              rounded="md"
              value={productDetails.image}
              onChange={(e)=>setProductDetails({...productDetails,image:e.target.value})}
            />
          </InputGroup>
        </FormControl>

    </>
  );
};

const Form3 = ({productDetails,setProductDetails}) => {
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal">
        Optional Details
      </Heading>
      <SimpleGrid columns={1} spacing={6}>
       
      <FormControl as={GridItem} colSpan={[6, 6, null, 2]}>
        <FormLabel
          htmlFor="city"
          fontSize="sm"
          fontWeight={500}
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Design
        </FormLabel>
        <Input
          
          id="city"
        //   autoComplete="city"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          placeholder='Enter Design'
          rounded="md"
          value={productDetails.design} 
          onChange={(e)=>setProductDetails({...productDetails,design:e.target.value})}
        />
      </FormControl>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight={500}
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Product Description
          </FormLabel>
          <Textarea
            placeholder="Enter Product Description"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
            value={productDetails.description}
            onChange={(e)=>setProductDetails({...productDetails,description:e.target.value})}
          />
          <FormHelperText>
            Brief description about product.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};
 
const initialProduct={type:"",
brand:"",
name:"",
price:"",
category:"",
discount:"",
image:"",
design:"",
description:"",}

export default function AdminAddProductsPage() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [loading,setLoading]=useState(false)
  const [progress, setProgress] = useState(33.33);
  const [productDetails,setProductDetails]=useState(initialProduct);

  
  const dispatch = useDispatch();
  
  
  const handleSubmit=()=>{
    if(productDetails.type==="Men"){
        dispatch(PostMenData(productDetails))
    }else if(productDetails.type==="Women"){
      dispatch(PostWomenData(productDetails))
    }else if(productDetails.type==="accessories"){
      dispatch(PostAccessoriesData(productDetails))
    }
    // if(!initialProduct.name || !initialProduct.brand || !initialProduct.price || !initialProduct.type ){
        
    //         toast({
    //           title: 'Fill the All details first',
    //           description: "product has been not added",
    //           status: 'error',
    //           duration:1500,
    //           isClosable: true,
    //         });
    //         setLoading(false);
    //         setStep(1);
    //         setProgress(33.33);
          
    // }else{
   
      toast({
        title: 'Successfully Added.',
        position: 'top-right',
        description: "You have added product successfully.",
        status: 'success',
        duration:1500,
        isClosable: true,
      });
      setLoading(false);
      setStep(1);
      setProgress(33.33);
   
   setLoading(true); 
  
   setProductDetails(initialProduct)
  //  console.log(productDetails)
//    }
}
//    console.log("Image",productDetails.image);
  return (
    <Box minH="100vh" bg={'#fff'}  >
      <AdminNavbar/>
      <Box
        bg={'white'}
        borderWidth="1px"
        rounded="lg"
        shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        // mt={'150px'}
        pos={"absolute"}
        top={150}
        left={'33%'}
        right={'18%'}
        as="form"
        >
        <Progress
          hasStripe
          colorScheme='yellow'
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 productDetails={productDetails} setProductDetails={setProductDetails} /> : step === 2 ? <Form2  productDetails={productDetails} setProductDetails={setProductDetails} /> : <Form3  productDetails={productDetails} setProductDetails={setProductDetails}  />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                bg="black"
                color="#fff"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="black"
                variant="outline">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                // w="7rem"
                colorScheme="blue"
                variant="solid"
                isLoading={loading}
                loadingText='Submitting'
                spinner={<BeatLoader size={10} color='white' />}
                onClick={handleSubmit}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </Box>
  );
}