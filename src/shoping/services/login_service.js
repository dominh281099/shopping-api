import axios from 'axios';
import md5 from 'md5';
import jwt from 'jsonwebtoken';

const KEY_JWT = 'vccorp_2020';
// const USER = 'trieunt';
// const PASS = 'reactjst3h';

const PAYLOAD = {
    iss: "http://t3h-edu.herokuapp.com/",
    aud: "http://t3h-edu.herokuapp.com/",
    iat: 1356999524,
    nbf: 1357000000
}// PAYLOAD du lieu tao ben token

const createToken = () => {
    const token = jwt.sign(PAYLOAD, KEY_JWT);
    return token;
}

export const loginUser = async (user, pass) => {
    //console.log(user, pass);
    pass = md5(`${KEY_JWT}|||${pass}`);
    const token = createToken();
    const response = await axios({
        url: `https://cors-anywhere.herokuapp.com/http://t3h-edu.herokuapp.com/api/learning/v1/login`,
        method: 'POST',
        headers: {
            "Access-Control-Allow-Origin" : "*",
            "Content-type": "Application/json",
            "Authorization": `${token}`
          },
        data: {username: user, password: pass}
    });
    const result = await response.status === 200 ? await response.data : {}; //
    return result;
}

// export const saveTokenLogin = async (token) => {
//     if(token !== undefined && token !== null && token !== '') {
//         localStorage.setItem('token', JSON.stringify(token));
//     }
// }

// export const removeTokenLogin = () => {
//     localStorage.removeItem('token');
// }
export const getTokenLogin = (token = null) => {
    const localToken = JSON.parse(localStorage['persist:token-persist']);
    const tokenStorage = localToken['token'];
	let tk = token === null ? JSON.parse(tokenStorage) : token;
	return tk;
};
export const decodeTokenLogin = (tokens=null) => {
    const token = getTokenLogin(tokens);
    let decodedToken = null;// dùng let để gán dữ liệu

    if(token !== undefined && token !== null && token !== ''){
        decodedToken = jwt.verify((token), KEY_JWT);
        // Giai ma
    }
    return decodedToken;
}

export const getUsername = (token = null) => {
    const inforuser = decodeTokenLogin(token);
    let username = null;
    if(inforuser !== null) {
        username = inforuser.username;
    }
    return username;
}
export const isLogin = (tokens = null)=>{
    const token = getTokenLogin(tokens);
    if(token !== null && token !== undefined && token !== ''){
      return true;
    }
    return false;
}