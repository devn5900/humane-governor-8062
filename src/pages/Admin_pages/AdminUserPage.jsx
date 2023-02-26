import { Avatar, AvatarGroup, Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar'
import UserCard from '../../components/Admin_components/UserCart'
import { deleteUserData, getUserSData } from '../../Redux/Admin/Admin.action'

const AdminUserPage = () => {
  const dispatch=useDispatch()
  const userData= useSelector((store)=>store.admin.userData)
  useEffect(()=>{
    dispatch(getUserSData())
  },[dispatch])

  const handleDelete=(id)=>{
    dispatch(deleteUserData(id))
  }

  console.log(userData)
  return (
    <Box  w={"100%"} gap={0} display="flex"  >
       <Box width="20%" >
            <AdminNavbar/>
       </Box>
       <Stack  w={"80%"} marginTop="100px" >
       <Box textAlign={"center"} w="100%" >
    <Heading mt={5} size={'lg'} >TOTAL USERS : {userData.length-1}</Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
    {userData.length!==0 && userData.map((el,i)=>(
     el.name==="admin" ? "" :<Avatar  key={i} name={`${el.name}`} />
    ))}
</AvatarGroup>
</HStack>
    </Box >
   
    <Stack margin={"auto"} width="100%" justifyContent={"center"} >
       <Box margin={"auto"}   background={"#fff"} width={["100%","100%" ,"100%" , "80%"]} >
        
         {
          userData.length===1 ? <Heading as="h5" color={"white"} bg="black" textAlign={"center"} >No Users</Heading>:
          userData.map((el)=>(
            el.name==="admin" ? "" 
            :
            <UserCard key={el.id} {...el} handleDelete={handleDelete} />
          ))
         }
        
       </Box>
       </Stack> 
    </Stack>
    </Box>
  )
}

export default AdminUserPage