import { profileAPI } from "../api/api"

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

    profileInfo: null,
    status: ''
}
const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: state.postsData.length+1, message: action.newPostBody }
            return {
                ...state,
                postsData: [...state.postsData,
                    newPost]
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
export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody })

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
    return profileAPI.updateStatus(status).then((res) => {
        if (res.data.resultCode === 0) {
            dispatch(setUserStatus(status));
        }
    });
}
export default profileReducer