const UPLOAD_USERS = 'UPLOAD-USERS'
const FOLLOW_USER_TO_FRIENDS = 'FOLLOW-USER-TO-FRIENDS'
const UNFOLLOW_USER_TO_FRIENDS = 'UNFOLLOW-USER-TO-FRIENDS'
const SET_USERS = 'SET-USERS'

let initialState = {
    users: [
       ]
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPLOAD_USERS: {
            return 0;
        }
        case FOLLOW_USER_TO_FRIENDS: {
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        }
        case UNFOLLOW_USER_TO_FRIENDS: {
            return {
                ...state, users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        }
        case SET_USERS: {
            return {
                ...state, users: [...state.users, ...action.users]
            }
        }
        default:
            return state
    }
}
export const uploadUsersActionCreator = () => ({ type: UPLOAD_USERS })
export const followUserToFriendsActionCreator = (userId) => ({ type: FOLLOW_USER_TO_FRIENDS, userId })
export const unFollowUserToFriendsActionCreator = (userId) => ({
    type: UNFOLLOW_USER_TO_FRIENDS,
    userId
})
export const setUsersActionCreator = (users) => ({ type: SET_USERS, users })
export default usersReducer