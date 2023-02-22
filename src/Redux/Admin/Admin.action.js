import { getMensDataAPI } from "./Admin.api";
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