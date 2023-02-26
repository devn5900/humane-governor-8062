
import { getMensProductsAPI } from './mens.api';
import * as types from './mens.types';

export const mensProductRequest = () => {
    return {type: types.MENS_PRODUCT_REQUEST}
};

export const mensProductError = () => {
    return {type: types.MENS_PRODUCT_ERROR}
};

export const getMensProductSuccess = (data) => {
    return {type: types.GET_MENS_PRODUCTS_SUCCESS, payload: data }
};

export const getMensProducts = (getMensProductsParam) => async(dispatch) => {
    dispatch(mensProductRequest());
    try{
        let data = await getMensProductsAPI(getMensProductsParam);
        if(data){
            dispatch(getMensProductSuccess(data))
        }
    }
    catch(e) {
        dispatch(mensProductError())
    }
}