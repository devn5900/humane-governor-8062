import { Button, Flex } from '@chakra-ui/react'
import React from 'react'

const Pagination = ({productsLength, perPage, activePage, handlePageChange}) => {
    const totalPages = Math.ceil(productsLength/perPage);
  return (
    <Flex gap={3}>
        {activePage !== 1 && <Button onClick={() => handlePageChange(activePage-1)}>Prev</Button>}
      {Array(totalPages).fill('').map((item,index) =>{
        return <Button colorScheme={activePage === index+1 ? 'cyan' : 'gray'}
        onClick={() => handlePageChange(index+1)}
        key={index}>{index+1}</Button>
      })}
      {activePage !== totalPages && <Button onClick={() => handlePageChange(activePage+1)}>Next</Button>}
    </Flex>
  )
}

export default Pagination;
