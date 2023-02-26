import axios from "axios"

export const getWomensProductsAPI = async(getWomensProductsParam) => {
    try{
        let response = await axios.get('https://busy-jade-mussel-sock.cyclic.app/products?type=Women&_limit=100',getWomensProductsParam);
        return response.data;
    }
    catch(e){
        console.error('getWomensProductAPI error', e);
    }
}