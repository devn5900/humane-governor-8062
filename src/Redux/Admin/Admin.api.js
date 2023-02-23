import axios from "axios"

// GET_APIS

export const getMensDataAPI=async(page)=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=Men`,{
        params:{
          _limit:15,
          _page:page
        }
    })
    return res.data;
}

export const getWomensDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=Women`)
    return res.data;
}

export const getAssecccoriesDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=accessories`)
    return res.data;
}