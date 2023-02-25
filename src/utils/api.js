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
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=15&_page=${val}`
  );

  return res;
};

export const accessSearch = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=15&q=${val}`
  );

  return res;
};

export const accessSort = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=15&_sort=price&_order=${val}`
  );

  return res;
};

export const accessRate = (val) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products?type=accessories&_limit=15&_sort=rating&_order=${val}`
  );

  return res;
};

export const getSingleProduct = async (id) => {
  const res = axios.get(
    `https://busy-jade-mussel-sock.cyclic.app/products/${id}`
  );
  return res;
};
