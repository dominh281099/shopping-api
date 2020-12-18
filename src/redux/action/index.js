import * as types from './type';

//Dinh nghia hanh dong cua nguoi dung
export const incrementCounter = (val) => ({
    type: types.INCREMENT_COUNTER,
    val // payload: data truyen len

});
export const decrementCounter = (val) => ({
    type: types.DECREMENT_COUNTER,
    val
})