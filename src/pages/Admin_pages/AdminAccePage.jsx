import { Box, HStack} from '@chakra-ui/layout';
import { Button, FormControl, FormLabel, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar';
import SingleCart from '../../components/Admin_components/SingleCart';
import {  deleteAccessoriesData,  getAssecccoriesData, updateProductData } from '../../Redux/Admin/Admin.action';
import { getAccessoriesData } from '../../utils/api';
import { useToast } from '@chakra-ui/react';

const AdminAccePage = () => {
  const toast = useToast();
  const dispatch=useDispatch();
  const AccessoriesData=useSelector((state)=>state.admin.accessories_Data);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [price , setPrice]=useState("");
  const [discount , setDiscount]=useState("");
  const [title, setTitle]=useState("");
  const [id , setId]=useState("");
  useEffect(()=>{
    dispatch(getAssecccoriesData())
  },[])

// console.log(AccessoriesData)

  const handleDelete=(id)=>{
    dispatch(deleteAccessoriesData(id))
    setTimeout(()=>{
    toast({
      title: 'Successfully Deleted.',
      
      position: 'top-right',
      description: "You have deleted product successfully.",
      status: 'info',
      duration:1500,
      isClosable: true,
    });
  },1000)
  }

  const handleUpdate=()=>{
    dispatch(updateProductData(id,title,price,discount)).then(()=>{
      dispatch(getAccessoriesData())
      onClose();
      setTimeout(()=>{
      toast({
        title: 'Successfully Updated',
        
        position: 'top-right',
        description: "You have updated product successfully.",
        status: 'info',
        duration:1500,
        isClosable: true,
      });
    },1000)
    })
  }
  const handleOpen=(id)=>{
    setId(id);
    onOpen();

  }


  return (
    // <div></div>
    <HStack  w={"100%"} gap={0}>
      <Box width="20%" >
      <AdminNavbar/>
      </Box>
      <Box background={"#fff"} width={["100%","100%" ,"100%" , "80%"]} marginTop={"200px"}>
      <TableContainer marginTop={"90px"}>
          <Table variant="striped" colorScheme="white">
            <Thead>
              <Tr>
                <Th color={"black"}>Image</Th>
                <Th color={"black"}>Title</Th>
                <Th color={"black"}>Category</Th>
                <Th color={"black"}>Discount</Th>
                <Th color={"black"}>Price</Th>
                <Th color={"black"}>Edit</Th>
                <Th color={"black"}>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {
                AccessoriesData?.map((item)=>(
                  <SingleCart
                  key={item.id}
                  {...item}
                  handleDelete={handleDelete} 
                  handleOpen={handleOpen}
                  />
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          isCentered
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Edit Product Details</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Title</FormLabel>
                <Input
                  type={"text"}
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Dicscount Price </FormLabel>
                <Input
                  placeholder="Discount"
                  type={"text"}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input
                  placeholder="Price"
                  type={"text"}
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleUpdate}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
      </ModalContent>
   </Modal>
        <Box mt="10px" bg="#fff" textAlign={'center'} >
        </Box>
      </Box>
    </HStack>
  )
}

export default AdminAccePage