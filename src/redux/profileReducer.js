import { stopSubmit } from "redux-form"
import { profileAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const DELETE_POST = 'DELETE_POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const SET_PHOTO = 'SET_PHOTO'

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
            let newPost = { id: state.postsData.length + 1, message: action.newPostBody }
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
        case DELETE_POST: {
            return {
                ...state,
                postsData: state.postsData.filter(p => p.id != action.postId)
            }
        } case SET_PHOTO: {
            return {
                ...state,
                profileInfo: { ...state.profileInfo, photos: action.photos }
            }
        }
        default:
            return state
    }
}
export const addPostActionCreator = (newPostBody) => ({ type: ADD_POST, newPostBody })
export const deletePostActionCreator = (postId) => ({ type: DELETE_POST, postId })

export const setUserProfile = (profileInfo) => ({ type: SET_USER_PROFILE, profileInfo })
export const setUserStatus = (status) => ({ type: SET_STATUS, status })
export const setPhoto = (photos) => ({ type: SET_PHOTO, photos })

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

export const savePhoto = (file) => async (dispatch) => {
    let res = await profileAPI.savePhoto(file)
    if (res.data.resultCode === 0) {

        dispatch(setPhoto(res.data.data.photos));
    }
};
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    const res = await profileAPI.saveProfile(profile)
    if (res.data.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit("ediProfile", { "contacts": { "facebook": res.data.messages[0] } }))
        return new Promise.reject(res.data.messages[0])
    }
};

export default profileReducer