// write your apis here

import axios from "axios";

export const searchSuggestions = async (searchText) => {
  console.log("rq", searchText);
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?_limit=100&category_like=${searchText}&name_like=${searchText}`
  );
  return res.data;
};

export const getAccessoriesData = () => {
    const res = axios.get(`https://busy-jade-mussel-sock.cyclic.app/products?type=accessories`)
    
    return res;
}
