import { authAPI } from "../api/api"

const SET_USER_DATA = 'SET_USER_DATA'


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}
const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.data
            }
        }
        default:
            return state
    }
}
export const setAuthUserData = (userId = null, email = null, login = null, isAuth = false) => ({ type: SET_USER_DATA, data: { userId, email, login, isAuth } })


//thunk 
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then((data) => {
        if (data.resultCode === 0) {
            let { userId = data.data.id, email, login } = data.data;
            dispatch(setAuthUserData(userId, email, login, true));
        }
    });
}

//thunk 
export const login = (data) => (dispatch) => {
    authAPI.login(data).then((data) => {
        if (data.resultCode === 0) {
            dispatch(getAuthUserData(data))
        }
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
export default authReducer 