import axios from "axios"

export const getMensProductsAPI = async(getMensProductsParam) => {
    try{
        let response = await axios.get('https://busy-jade-mussel-sock.cyclic.app/products?type=Men&_limit=100',getMensProductsParam);
        return response.data;
    }
    catch(e){
        console.error('getMensProductAPI error', e);
    }
}