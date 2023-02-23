import * as types from "./actionTypes";

const initialState = {
    isLoading:false,
    isError:false,
    data:[]
}

export const reducer = (state = initialState,action) => {
    const {type,payload} = action
    switch(type){
        case types.ACCESS_LOADING:{
            return {
                ...state,isLoading:true,isError:false
            }
        }
        case types.ACCESS_ERROR:{
            return {
                ...state,isLoading:false,isError:true
            }
        }
        case types.GET_ACCESS_PRODUCTS:{
            return {
                ...state,isLoading:false,isError:false,data:payload
            }
        }
        case types.BACKPACK_DATA:{
            return {
                ...state,
                isLoading:false,
                isError:false,
                data: state.data.filter((e) => e.type === "accessories")
            }
        }
        default:{
            return state
        }
    }
}