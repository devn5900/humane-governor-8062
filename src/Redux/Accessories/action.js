import * as types from "./actionTypes";

const accessLoading = () => {
    return {
        type:types.ACCESS_LOADING
    }
}

const accessError = () => {
    return {
        type:types.ACCESS_ERROR
    }
}

const getAccessoriesProducts = (payload) => {
    return {
        type:types.GET_ACCESS_PRODUCTS,
        payload
    }
}

export {accessLoading,accessError,getAccessoriesProducts}