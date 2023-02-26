
import * as types from "./womens.types";

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
    case types.WOMENS_PRODUCT_REQUEST:
      return { ...oldState, loading: true };
    case types.WOMENS_PRODUCT_ERROR:
      return { ...oldState, loading: false, error: true };
    case types.GET_WOMENS_PRODUCTS_SUCCESS:
      return { ...oldState, loading: false, data: action.payload };
    default:
      return oldState;
  }
};

export { reducer };
