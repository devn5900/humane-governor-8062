
import { deleteMenDataAPI, getAssecccoriesDataAPI, getMensDataAPI, getWomensDataAPI, postMenDataAPI, updateProductAPI } from "./Admin.api";
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


// DELETE ACTIONS

export const deleteMenData=(id)=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING});
    try {
        await deleteMenDataAPI(id);
       
       
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
    dispatch(getMenData())
}

export const deleteWomenData=(id)=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING});
    try {
        await deleteMenDataAPI(id);
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
    dispatch(getWomenData())
}

export const deleteAccessoriesData=(id)=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING});
    try {
        await deleteMenDataAPI(id);
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
    dispatch(getAssecccoriesData())
}

// UPDATE Actions

export const updateProductData=(id,newTitle,newPrice,newDiscount)=>async(dispatch)=>{
    dispatch({type:types.PRODUCT_LOADING})
    try {
        await updateProductAPI(id,newTitle,newPrice,newDiscount);
        dispatch({type:types.UPDATE_PRODUCT});
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
}


// POST ACTIONS

export const PostMenData=(menProduct)=>async(dispatch)=>{
    console.log("Men",menProduct)
    dispatch({type:types.PRODUCT_LOADING});
    try {
        return postMenDataAPI(menProduct).then((res)=>console.log(res))
        
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
}

export const PostWomenData=(womenProduct)=>async(dispatch)=>{
    console.log("Men",womenProduct)
    dispatch({type:types.PRODUCT_LOADING});
    try {
        return postMenDataAPI(womenProduct).then((res)=>console.log(res))
        
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
}

export const PostAccessoriesData=(AcceProduct)=>async(dispatch)=>{
    console.log("Men",AcceProduct)
    dispatch({type:types.PRODUCT_LOADING});
    try {
        return postMenDataAPI(AcceProduct).then((res)=>console.log(res))
        
    } catch (error) {
        dispatch({type:types.PRODUCT_ERROR})
    }
}


