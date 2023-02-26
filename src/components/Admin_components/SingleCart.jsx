
import { DeleteIcon, EditIcon } from '@chakra-ui/icons'
import { Td, Tr ,Image, Button} from "@chakra-ui/react"
import React from 'react'

const SingleCart = ({id,name,price,brand,discount,image , category,handleDelete,handleOpen}) => {
  return (
    <Tr key={id}>
        
      <Td>
        <Image
          src={image}
          alt={name}
          borderRadius={3}
          width={"50px"}
          ring={2}
          ringColor={"black"}
        />
      </Td>
      <Td>{name}</Td>
      <Td>{category}</Td>
      <Td>{discount}</Td>
      <Td>₹ {price}</Td>  
      <Td>
        <Button
          bg={"fff"}
          color={"black"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleOpen(id,name , discount ,price)}
        >
          <EditIcon />
        </Button>
      </Td>
      <Td>
        <Button
          bg={"#fff"}
          color={"black"}
          _hover={{ color: "black", backgroundColor: "gray.200" }}
          onClick={() => handleDelete(id)}
        >
          <DeleteIcon />
        </Button>
      </Td>
    </Tr>
  )
}

export default SingleCart