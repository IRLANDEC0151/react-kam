const UPLOAD_USERS = 'UPLOAD-USERS'
const FOLLOW_USER_TO_FRIENDS = 'FOLLOW-USER-TO-FRIENDS'
const UNFOLLOW_USER_TO_FRIENDS = 'UNFOLLOW-USER-TO-FRIENDS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

let initialState = {
    users: [
    ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false
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
                ...state, users: action.users
            }
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case SET_TOTAL_USERS_COUNT: {
            return {
                ...state, totalUsersCount: action.totalUsersCount
            }
        }
        case TOGGLE_IS_FETCHING: {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}
export const uploadUsers = () => ({ type: UPLOAD_USERS })
export const followUserToFriends = (userId) => ({ type: FOLLOW_USER_TO_FRIENDS, userId })
export const unFollowUserToFriends = (userId) => ({
    type: UNFOLLOW_USER_TO_FRIENDS,
    userId
})
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export default usersReducer 