
import { Box, Button, HStack } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({setCurrentPage,
    handlePage,
    currentPage,}) => {
const handlePageChange=(page)=>{
    handlePage(page)
}

  return (
    <HStack justifyContent={"center"} textAlign={"center"} mt="20px" mb="10px" >
        <Button w={"1rem"} fontSize={{sm:"0.7rem",lg:'1rem'}}
          isDisabled={currentPage === 1}
          onClick={() => handlePageChange(-1)}
        >
          Prev
        </Button>
        {
            currentPage == 1 ? "":<Button>{currentPage-1}</Button>
        }
        
        <Button  isDisabled>{currentPage}</Button>
        <Button>{currentPage+1}</Button>
        <Button  w={"1rem"} fontSize={{sm:"0.7rem",lg:'1rem'}} onClick={() => handlePageChange(1)}>
          Next
        </Button>
    </HStack>
  )
}

export default Pagination