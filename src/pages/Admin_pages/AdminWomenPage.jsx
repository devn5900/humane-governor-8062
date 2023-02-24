import { Box, HStack} from '@chakra-ui/layout';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar';
import SingleCart from '../../components/Admin_components/SingleCart';
import {  deleteWomenData, getWomenData } from '../../Redux/Admin/Admin.action';

const AdminWomenPage = () => {
  const dispatch=useDispatch();
  const WomenData=useSelector((state)=>state.admin.women_Data);
  useEffect(()=>{
    dispatch(getWomenData())
  },[])

console.log(WomenData)

  const handleDelete=(id)=>{
    dispatch(deleteWomenData(id))
  }

  return (
    
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
                WomenData?.map((item)=>(
                  <SingleCart
                  key={item.id}
                  {...item}
                  handleDelete={handleDelete} 
                  />
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <Box mt="10px" bg="#fff" textAlign={'center'} >
        </Box>
      </Box>
    </HStack>
  )
}

export default AdminWomenPage