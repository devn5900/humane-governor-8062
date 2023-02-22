import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getMenData } from '../../Redux/Admin/Admin.action';

const AdminMenPage = () => {
  const dispatch=useDispatch();
  const menData=useSelector((state)=>state.admin.mens_Data);

  useEffect(()=>{
    dispatch(getMenData())
  },[])
  console.log(menData)

  return (
    <div>MenPage</div>
  )
}

export default AdminMenPage