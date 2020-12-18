import axios from 'axios';
import *as api from './constant';

export const getDataProducts = async () => {
    const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.PRODUCT_URL}`;
    const response = await axios.get(url);
    const results = await response.status === 200 ? response.data : [];
    return results;
}

export const getDataProductById = async (id=0) => {
    const url = `${api.configApi.PROXY_API}${api.configApi.BASE_URL}${api.configApi.DETAIL_PRODUCT_URL}${id}`;
    const response = await axios.get(url);
    const results = await response.status === 200 ? response.data : {}; //ban chat chi lay dc 1 san phan => tra ve obj
    return results;
}