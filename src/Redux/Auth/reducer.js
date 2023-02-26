import React from "react";
import {
  ADD_ITEM,
  EMPTY_CART,
  GET_ADD_TO_CART,
  GET_LOGIN_USER,
  GET_LOGOUT_USER,
  GET_REMOVE_CART,
} from "./actionType";

const init = {
  name: "",
  avatar: "",
  password: "",
  email: "",
  isLogged: false,
  cartItem: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_LOGIN_USER:
      return payload;
    case GET_ADD_TO_CART:
      return { ...state, cartItem: [...state.cartItem, payload] };
    case GET_REMOVE_CART:
      console.log(payload)
      return {
        ...state,
        cartItem: [...state.cartItem.filter((el) => el.id !== payload)],
      };
    case GET_LOGOUT_USER:
      return init;
    case ADD_ITEM:
      return { ...state };
    case EMPTY_CART:
      return {
        ...state,
        cartItem: [],
      };
    default:
      return state;
  }
};
