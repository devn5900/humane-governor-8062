import * as types from "./Admin.type";

const initialState = {
  loading: false,
  error: false,
  totalPages:0,
  mens_Data: [],
  women_Data:[],
  accessories_Data: [],
  data: [],
  userData: [],
};

export const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.PRODUCT_LOADING:
      return {
        ...state,
        loading: true,
        error: false,
      };
    case types.PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: true,
      };
    case types.GET_MEN_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        mens_Data: payload,
        // totalPages:payload.headers["x-total-count"]
      };
    case types.GET_WOMEN_PRODUCT_SUCCESS:
      return {
        ...state,
        loading:false,
        error:false,
        women_Data:payload,
      }  
    case types.GET_ACCESSORIES_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        accessories_Data: payload,
      };
      
    case types.GET_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        userData:payload,
      };
    case types.DELETE_MEN_PRODUCT:
      return {
        ...state,
        loading:false,
        error:false,
      }
    case types.DELETE_WOMEN_PRODUCT:
      return {
        ...state,
        loading:false,
        error:false,
      }  
      case types.DELETE_ACCESSORIES_PRODUCT:
        return {
          ...state,
          loading:false,
          error:false,
        }
      case types.UPDATE_PRODUCT:
        return {
          ...state,
          loading:false,
          error:false
        }
      case types.ADD_MEN_PRODUCT_SUCCESS:
        return {
          ...state,
          loading:false,
          error:false,
        }   
        case types.ADD_WOMEN_PRODUCT_SUCCESS:
          return {
            ...state,
            loading:false,
            error:false,
          } 
          case types.ADD_ACCESSORIES_PRODUCT_SUCCESS:
            return {
              ...state,
              loading:false,
              error:false,
            }              
     default :
     return state 
  }
};
