// write your apis here

import axios from "axios";

export const searchSuggestions = async (searchText) => {
  let res = await axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?category_like=${searchText}&name_like=${searchText}`
  );
  return res.data;
};
