import axios from "axios"

// GET_APIS

export const getMensDataAPI=async()=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=Men`)
    return res.data;
}