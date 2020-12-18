import * as types from '../actions/types';


//Pd: product
const initState = {
    loadingPb: false,
    errorPb: null,
    dataProduct: []

}

export const productReducer = (state = initState, action) => {
    switch(action.type){
        case types.START_GET_DATA:
            return{
                ...state,
                loadingPb: action.loading
            }
        case types.STOP_GET_DATA:
            return {
                ...state,
                loadingPb: action.loading
            }
        case types.GET_DATA_SUCCESS:
            return {
                ...state,
                errorPb: null,
                dataProduct: action.products
            }
        case types.GET_DATA_FAILURE:
            return {
                ...state,
                errorPb: action.error,
                dataProduct: []

            }
            default:
            return state;
    }
}