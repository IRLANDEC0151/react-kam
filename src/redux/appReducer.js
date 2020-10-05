import { stopSubmit } from "redux-form"
import { authAPI } from "../api/api"
import { getAuthUserData } from "./authReducer"

const SET_INITIALIZED = 'SET_INITIALIZED'


let initialState = {
    initialized: false
}
const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED: { 
            return {
                ...state,
                initialized: true
            }
        }
        default:
            return state
    }
}
export const setInitializedSuccess = () => ({ type: SET_INITIALIZED })


//thunk 
export const initialize = () => (dispatch) => {
    dispatch(getAuthUserData()).then(() => {
        dispatch(setInitializedSuccess())
    })
};

export default appReducer 