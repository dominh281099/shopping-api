import * as types from './types';

export const loginRequest = (user, pass) => ({
    type: types.LOGIN_REQUEST,
    user,
    pass
}); 

export const logoutRequest = (data) => ({
    type: types.LOGOUT_REQUEST,
    data
})

export const loginSuccess = (data) => ({
    type: types.LOGIN_SUCCESS,
    data
});

export const loginError = (error) => ({
    type: types.LOGIN_ERROR,
    error
});

export const loginCancelled = (cancel) => ({
    type: types.LOGIN_CANCELLED,
    cancel

});

export const saveTokenLogin = (token) => ({
    type: types.SAVE_TOKEN_LOGIN,
    token
});

export const removeTokenLogin = (token) => ({
    type: types.REMOVE_TOKEN_LOGIN,
    token
});

export const startLogin = (loading) => ({
    type: types.START_LOGIN,
    loading
});

export const logoutSuccess = (data) => ({
    type: types.LOGOUT_SUCCESS,
    data
}) 
