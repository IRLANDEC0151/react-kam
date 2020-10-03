import { profileAPI, userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'

let initialState = {
    postsData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "First post" },
        { id: 3, message: "Second post" },
    ],
    newPost: 'it-kam',
    profileInfo: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: state.newPost }
            return {
                ...state, newPost: '',
                postsData: [...state.postsData,
                    newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPost: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profileInfo: action.profileInfo
            }
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = () => ({ type: ADD_POST })
export const updateNewPostActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text,
})
export const setUserProfile = (profileInfo) => ({ type: SET_USER_PROFILE, profileInfo })
export const setUserStatus = (status) => ({ type: SET_STATUS, status })

//thunk
export const getUserProfile = (userId) => (dispatch) => {
    return profileAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
}

export const getUserStatus = (userId) => (dispatch) => {
    return profileAPI.getStatus(userId).then((res) => {
        dispatch(setUserStatus(res));
    });
}

export const updateUserStatus = (status) => (dispatch) => {
    return profileAPI.getStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
}
export default profileReducer