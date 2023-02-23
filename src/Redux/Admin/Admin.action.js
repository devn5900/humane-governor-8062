
import { getAssecccoriesDataAPI, getMensDataAPI, getWomensDataAPI } from "./Admin.api";
import * as types from "./Admin.type";

// GET_ACTIONS

export const getMenData=()=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING})
    try {
        let data= await getMensDataAPI();
        dispatch({type:types.GET_MEN_PRODUCT_SUCCESS,payload:data});
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR});
        
    }
}

export const getWomenData=()=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING});
    try{
        let data= await getWomensDataAPI();
        dispatch({type:types.GET_WOMEN_PRODUCT_SUCCESS,payload:data})
    }catch(error){
        dispatch({type:types.PRODUCT_ERROR});
    }
}

export const getAssecccoriesData=()=>async(dispatch)=>{
    dispatch(({type:types.PRODUCT_LOADING}));
    try {
        let data= await getAssecccoriesDataAPI();
        dispatch({type:types.GET_ACCESSORIES_PRODUCT_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
}