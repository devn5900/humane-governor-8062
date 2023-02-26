// write your apis here

import axios from "axios";

export const searchSuggestions = async (searchText) => {
  console.log("rq", searchText);
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?_limit=100&category_like=${searchText}&name_like=${searchText}`
  );
  return res.data;
};

export const getAccessoriesData = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=21&_page=${val}`
  );

  return res;
};

export const accessSearch = (search) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=21&q=${search}`
  );

  return res;
};

export const accessSort = (sort,search) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=21&_sort=price&_order=${sort}&q=${search}`
  );

  return res;
};

export const accessRate = (rating,search) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=21&_sort=rating&_order=${rating}&q=${search}`
  );

  return res;
}




export const regUser =async(data)=>{

  let res= await fetch(`https://busy-jade-mussel-sock.cyclic.app/signup`,{
   
  method:'POST',
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(data)
  });

  return res;

}




export const loginUser=async(email)=>{
    let res= await axios.get(`https://busy-jade-mussel-sock.cyclic.app/signup?email=${email}`);
    return res.data;
}

export const getSingleProduct = async (id) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products/${id}`
  );
  return res;
};


// Mens product data fetching


export const mensSort = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=Men&_limit=15&_sort=price&_order=${val}`
  );

  return res;
};

export const mensRate = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=Men&_limit=15&_sort=rating&_order=${val}`
  );

  return res;
};


export const getSingleMensProduct = async (id) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products/${id}`
  );
  return res;
};
