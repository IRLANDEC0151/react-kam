import { userAPI } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    postsData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "First post" },
        { id: 3, message: "Second post" },
    ],
    newPost: 'it-kam',
    profileInfo: null
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

//thunk
export const getUserProfile = (userId) => (dispatch) => {
    return userAPI.getProfile(userId).then((data) => {
        dispatch(setUserProfile(data));
    });
}
export default profileReducer