// xu ly cap nhap va tra ve state moi
import * as types from '../action/type';

// Tao state mac dinh
const initState = {
    count: 0

}

export const counterReducer = (state = initState, action) => {
    // lua chon hanh dong xay ra
    switch (action.type){
        case types.INCREMENT_COUNTER:
            return {...state, count: action.val + 1}
        case types.DECREMENT_COUNTER:
            return {...state, count: action.val - 1}
            default:
                return state;
    }
}