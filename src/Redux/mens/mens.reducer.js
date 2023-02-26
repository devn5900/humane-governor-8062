
import * as types from "./mens.types";

const initialState = {
  loading: false,
  error: false,
  data: [],
};

const reducer = (
  oldState = initialState,
  action
) => {
  const { type } = action;

  switch (type) {
    case types.MENS_PRODUCT_REQUEST:
      return { ...oldState, loading: true };
    case types.MENS_PRODUCT_ERROR:
      return { ...oldState, loading: false, error: true };
    case types.GET_MENS_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, data: action.payload };
    default:
      return oldState;
  }
};

export { reducer };
