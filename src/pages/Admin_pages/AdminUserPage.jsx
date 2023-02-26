import { Avatar, AvatarGroup, Box, Heading, HStack, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AdminNavbar from '../../components/Admin_components/AdminNavbar'
import UserCard from '../../components/Admin_components/UserCart'
import { getUserSData } from '../../Redux/Admin/Admin.action'

const AdminUserPage = () => {
  const dispatch=useDispatch()
  const userData= useSelector((store)=>store.admin.userData)
  useEffect(()=>{
    dispatch(getUserSData())
  },[])
  console.log(userData)
  return (
    <Box  w={"100%"} gap={0} display="flex" alignItems={"center"} >
       <Box width="20%" >
            <AdminNavbar/>
       </Box>
       <Stack margin={"auto"} w={"80%"} marginTop="100px" >
       <Stack justifyContent={'center'} margin={"auto"} >
    <Heading mt={5} size={'lg'} >TOTAL USERS : {userData.length}</Heading>
    <HStack justifyContent={'center'}>
    <AvatarGroup size='md' max={3} mt={3}>
    {userData.length!==0 && userData.map((el,i)=>(
     <Avatar  key={i} name={`${el.name}`} />
    ))}
</AvatarGroup>
</HStack>
    </Stack>
    {/* <Stack margin={"auto"} width="100%" justifyContent={"center"} > */}
       <Box margin={"auto"} background={"#fff"} width={["100%","100%" ,"100%" , "80%"]} marginTop={"200px"}>

         {
          userData.length!==0 && userData.map((el)=>(
            <UserCard key={el.id} {...el} />
          ))
         }

       </Box>
       {/* </Stack>  */}
    </Stack>
    </Box>
  )
}

export default AdminUserPage