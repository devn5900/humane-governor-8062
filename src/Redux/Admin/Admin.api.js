import axios from "axios"

// GET_APIS

export const getMensDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=Men`)
    return res.data;
}

export const getWomensDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=Women`)
    return res.data;
}

export const getAssecccoriesDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=100`)
    return res.data;
}

// DELETE_APIS

export const deleteMenDataAPI=async(id)=>{
    let res= await axios.delete(`https://busy-jade-mussel-sock.cyclic.app/products/${id}`)
    return res.data
}

// export const deleteWomenDataAPI=async(id)=>{
//     let res= await axios.delete(`https://busy-jade-mussel-sock.cyclic.app/products?type=Women/${id}`)
//     return res.data
// }

// export const deleteAccessDataAPI=async(id)=>{
//     let res= await axios.delete(`https://busy-jade-mussel-sock.cyclic.app/products?type=accessories/${id}`)
//     return res.data
// }

