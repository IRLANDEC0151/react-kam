import { stopSubmit } from "redux-form"
import { authAPI, securityAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_SUCCESS = 'GET_CAPTCHA_SUCCESS'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
        case GET_CAPTCHA_SUCCESS:
            return {
                ...state,
                ...action.data
            }

        default:
            return state
    }
}
export const setAuthUserData = (userId = null, email = null, login = null, isAuth = false) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })
export const getCaptchaUrlSuccess = (captchaUrl) => ({ type: GET_CAPTCHA_SUCCESS, data: { captchaUrl } })


//thunk 
export const getAuthUserData = () => (dispatch) => {
    return authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            let { userId = data.data.id, email, login } = data.data;
            dispatch(setAuthUserData(userId, email, login, true));
            return 'success'
        }
    });
}

//thunk 
export const login = (data) => (dispatch) => {
    authAPI.login(data).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData(data))
        } else
            if (data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
        dispatch(stopSubmit("login", { _error: data.messages[0] }))

    });
}
//thunk 
export const logOut = (data) => (dispatch) => {
    authAPI.loginOut().then((data) => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData())
        }
    });
}

//thunk 
export const getCaptchaUrl = () => async (dispatch) => {
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url
    dispatch(getCaptchaUrlSuccess(captchaUrl))
}
export default authReducer 