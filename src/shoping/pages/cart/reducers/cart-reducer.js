import *as types from '../actions/types';

const initState = {
    statusAdd: false,
    finished: false,
    cartItems: [], 
    sumMoney: 0,
    coutItem: 0,
    errorCart: null

}

export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case types.START_ADD_CART:
            return {...state, statusAdd: action.status}
        case types.FINISH_ADD_CART:
            return {...state, finished: action.status}
        case types.ADD_CART_FAILURE:
            return {...state, errorCart: action.console.error}
        case types.ADD_CART_SUCCESS:
            const detailPd = action.data; // thong tin chi tiet cua san pham se duoc cho vao gio hang - la 1 object chua toan bo thong tin chi tiet cua san pham
            //truong hop gio hang chua ton tai hay la chua co san pham nao ben trong
            if(!state.cartItems){
                //bo sung them truong so luong mua san pham vao ben trong du lieu cua san pham
                detailPd.qty = 1; 
                return {
                    ...state,
                    cartItems: [...state.cartItems, detailPd],
                    errorCart: null,
                    coutItem: state.coutItem + 1, // = 0 + 1
                    sumMoney:   parseInt(state.sumMoney) + parseInt(detailPd.price)//state.sumMoney + (parseInt(detailPd.price) * detailPd.qty)

                }
            }
            else{
                // kietm tra san pham them moi da ton tai trong gio hang chua?
                // Neu da ton tai thi chi cap nhap lai so luong mua
                // neu khong thi them moi san pham vao gio hang
                const idPdAdd = detailPd.id;
                const infoPd = state.cartItems.filter(item => item.id === idPdAdd) [0];
                if(infoPd) {
                    infoPd.qty += 1; //cap nhap lai so luong . infoPb obj con nam trong cartItems
                    return {
                        ...state,
                        errorCart: null,
                        sumMoney: state.sumMoney + parseInt(detailPd.price)
                    }
                } else{
                    detailPd.qty = 1; 
                    return {
                        ...state,
                        cartItems: [...state.cartItems, detailPd],
                        errorCart: null,
                        coutItem: state.coutItem + 1, // = 0 + 1
                        sumMoney: state.sumMoney + parseInt(detailPd.price)
    
                    }
                }
            }
        case types.DELETE_ITEM_CART:
            const idDel = action.id;
            // lay ra san pham bi xoa trong gio hang 
            const itemDel = state.cartItems.filter(item => item.id === idDel)[0];
            // lay ra toan bo san pham con lai trong gio hang (tru thg bi xoa)
            const newCartItems = state.cartItems.filter(item => item.id !== idDel);
            //cap nhap 3 state (so luong,) 
            return{
                ...state,
                cartItems: newCartItems,
                errorCart: null,
                coutItem: state.coutItem -1,
                sumMoney: parseInt(state.sumMoney) - (parseInt(itemDel.price)*itemDel.qty)
            }
            case types.CHANGE_QTY_CART:
        const idChange = action.id;
        const qtyChange = action.qty;
        // tim san pham ma nguoi dung muon thay doi so luong mua nam trong gio hang
        // de cap nhap so luong mua moi cho nguoi dung san pham day
        // const itemChange = state.cartItems.filter(item => item.id === idChange  ) [0];
        // itemChange.qty = qtyChange;
        // cap nhap so luong trong gio hang
        const newCarts = state.cartItems.map(item=>{
            return item.id === idChange ? {...item,qty: qtyChange}
            :item;
        });
        const newTotalMoney = state.cartItems.map(item => parseInt(item.price) * item.qty).reduce((pre, next)=> pre + next);//map: duyet, tra ve mang chua tat ca so tien => cong don so tien la xong
        //state.cartItems.map(item => parseInt(item.price) * item.qty) : tra ve 1 mang chua toan bo so tien cua tung san pham 
        //reduce((pre, next)=> pre + next): cong don so tien nam trong mang
        return{
            ...state,
            cartItems: newCarts,
            sumMoney: newTotalMoney,
            errorCart: null,
        }
        default:
           return state; 
    }
    
}