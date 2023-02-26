import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserSData } from '../../Redux/Admin/Admin.action'

const AdminUserPage = () => {
  const dispatch=useDispatch()
  const userData= useSelector((store)=>store.admin.userData)
  useEffect(()=>{
    dispatch(getUserSData())
  },[])
  console.log(userData)
  return (
    <div>AdminUserPage</div>
  )
}

export default AdminUserPage