import axios from "axios";

// GET_APIS

export const getMensDataAPI = async () => {
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=Men&_order=desc&_sort=id`
  );
  return res.data;
};

export const getWomensDataAPI = async () => {
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=Women&_order=desc&_sort=id`
  );
  return res.data;
};

export const getAssecccoriesDataAPI = async () => {
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=100&_order=desc&_sort=id`
  );
  return res.data;
};

export const getusersDataApi=async()=>{
  let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/signup`)
  return res.data
}

// DELETE_APIS

export const deleteMenDataAPI = async (id) => {
  let res = await axios.delete(
    `https://busy-jade-mussel-sock.cyclic.app/products/${id}`
  );
  return res.data;
};

export const deleteUserDataAPI=async(id)=>{
  let res= await axios.delete(`https://busy-jade-mussel-sock.cyclic.app/signup/${id}`)
  return res.data
}

// UPDATE_API

export const updateProductAPI = async (id, newTitle, newPrice, newDiscount) => {
  let res = await axios.patch(
    `https://busy-jade-mussel-sock.cyclic.app/products/${id}`,
    {
      name: newTitle,
      price: newPrice,
      discount: newDiscount,
    }
  );
  return res.data;
};

// POST_APIS

export const postMenDataAPI=async(mensProduct)=>{
    let res=await fetch(`https://busy-jade-mussel-sock.cyclic.app/products?type=Men`,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"

        },
        body:JSON.stringify(mensProduct)
    })
    return res.data
}

export const postWomenDataAPI=async(womenProduct)=>{
  let res=await fetch(`https://busy-jade-mussel-sock.cyclic.app/products?type=Women`,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"

      },
      body:JSON.stringify(womenProduct)
  })
  return res.data
}

export const postAccenDataAPI=async(accProduct)=>{
  let res=await fetch(`https://busy-jade-mussel-sock.cyclic.app/products?type=accessories`,{
      method:"POST",
      headers:{
          "Content-Type":"application/json"

      },
      body:JSON.stringify(accProduct)
  })
  return res.data
}

