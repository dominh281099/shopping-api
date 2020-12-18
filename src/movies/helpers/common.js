// viet ham tien ich dung chung
// 1 - kiem tra xem object rong hay khong

export const isEmptyObject = (obj) => {
    for (let key in obj) {
        if(obj.hasOwnProperty(key)){
            return false;
        }
    }
    return true;
}