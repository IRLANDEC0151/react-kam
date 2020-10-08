import { userAPI } from "../api/api";
import { updateObjectInArray } from "../utils/validators/object-helpers";

const UPLOAD_USERS = 'UPLOAD-USERS'
const FOLLOW_USER_TO_FRIENDS = 'FOLLOW-USER-TO-FRIENDS'
const UNFOLLOW_USER_TO_FRIENDS = 'UNFOLLOW-USER-TO-FRIENDS'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS'

let initialState = {
    users: [
    ],
    pageSize: 100,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}
const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPLOAD_USERS: {
            return 0;
        }
        case FOLLOW_USER_TO_FRIENDS: {
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", { followed: true })
            }
        }
        case UNFOLLOW_USER_TO_FRIENDS: {
            return {
                ...state, users: updateObjectInArray(state.users, action.userId, "id", { followed: false })
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
        } case TOGGLE_IS_FOLLOWING_IN_PROGRESS: {
            return {
                ...state, followingInProgress: action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state
    }
}
export const uploadUsers = () => ({ type: UPLOAD_USERS })
export const acceptFollowUserToFriends = (userId) => ({ type: FOLLOW_USER_TO_FRIENDS, userId })
export const acceptUnFollowUserToFriends = (userId) => ({
    type: UNFOLLOW_USER_TO_FRIENDS,
    userId
})
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUserCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalUsersCount })
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const toggleIsFollowingInProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_IN_PROGRESS, isFetching, userId })

//thunk
export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        userAPI
            .getUsers(currentPage, pageSize)
            .then((data) => {
                dispatch(setCurrentPage(currentPage))
                dispatch(toggleIsFetching(false));
                dispatch(setUsers(data.items));
                dispatch(setTotalUserCount(data.totalCount));
            });
    }
}
const followUnfollow = async (dispatch, userId, apiMethod, actionCreator) => {
    dispatch(toggleIsFollowingInProgress(true, userId));
    let res = await apiMethod(userId)
    if (res.data.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleIsFollowingInProgress(false, userId));
}

export const followThunkCreator = (userId) => {
    let apiMethod = userAPI.followUsers.bind(userAPI)
    return async (dispatch) => {
        followUnfollow(dispatch, userId, apiMethod, acceptFollowUserToFriends)
    }
}

export const unFollowThunkCreator = (userId) => {
    let apiMethod = userAPI.unFollowUsers.bind(userAPI)
    return async (dispatch) => {
        followUnfollow(dispatch, userId, apiMethod, acceptUnFollowUserToFriends)
    }
}

export default usersReducer 