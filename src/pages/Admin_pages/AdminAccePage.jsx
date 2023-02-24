import { Box, HStack} from '@chakra-ui/layout';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar';
import SingleCart from '../../components/Admin_components/SingleCart';
import {  deleteAccessoriesData,  getAssecccoriesData } from '../../Redux/Admin/Admin.action';

const AdminAccePage = () => {
  const dispatch=useDispatch();
  const AccessoriesData=useSelector((state)=>state.admin.accessories_Data);
  useEffect(()=>{
    dispatch(getAssecccoriesData())
  },[])

console.log(AccessoriesData)

  const handleDelete=(id)=>{
    dispatch(deleteAccessoriesData(id))
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

export default AdminAccePage