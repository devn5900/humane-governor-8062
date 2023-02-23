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

const backpackData = () => {
    return {
        type:types.BACKPACK_DATA,
    }
}

const capsData = (payload) => {
    return {
        type:types.CAPS_DATA,
        payload
    }
}

const footwearData = (payload) => {
    return {
        type:types.FOOTWEAR_DATA,
        payload
    }
}

export {accessLoading,accessError,getAccessoriesProducts,backpackData,capsData,footwearData}