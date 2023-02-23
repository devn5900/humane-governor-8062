import { Box, HStack} from '@chakra-ui/layout';
import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/table';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar';
import Pagination from '../../components/Admin_components/Pagination';
import SingleCart from '../../components/Admin_components/SingleCart';
import { getMenData } from '../../Redux/Admin/Admin.action';

const AdminMenPage = () => {
  const dispatch=useDispatch();
  const menData=useSelector((state)=>state.admin.mens_Data);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    dispatch(getMenData())
  },[dispatch , currentPage])
  
  const handlePage = (val) => {
    setCurrentPage((prev) => prev + val);
  };

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
                menData?.map((item)=>(
                  <SingleCart
                  key={item.id}
                  {...item} 
                  />
                ))
              }
            </Tbody>
          </Table>
        </TableContainer>
        <Box mt="10px" bg="#fff" textAlign={'center'} >
          <Pagination
          handlePage={handlePage}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          // totalPages={totalPages}
          />
        </Box>
      </Box>
    </HStack>
  )
}

export default AdminMenPage