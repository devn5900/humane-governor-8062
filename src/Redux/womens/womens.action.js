
import { getWomensProductsAPI } from './womens.api';
import * as types from './womens.types';

export const womensProductRequest = () => {
    return {type: types.WOMENS_PRODUCT_REQUEST}
};

export const womensProductError = () => {
    return {type: types.WOMENS_PRODUCT_ERROR}
};

export const getWomensProductSuccess = (data) => {
    return {type: types.GET_WOMENS_PRODUCTS_SUCCESS, payload: data }
};

export const getWomensProducts = (getWomensProductsParam) => async(dispatch) => {
    dispatch(womensProductRequest());
    try{
        let data = await getWomensProductsAPI(getWomensProductsParam);
        if(data){
            dispatch(getWomensProductSuccess(data))
        }
    }
    catch(e) {
        dispatch(womensProductError())
    }
}