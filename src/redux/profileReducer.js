const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

let initialState = {
    postsData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "First post" },
        { id: 3, message: "Second post" },
    ],
    newPost: 'it-kam'
}
const profileReducer = (state = initialState, action) => {
    let stateCopy;
    switch (action.type) {
        case ADD_POST: {
            let newPost = { id: 5, message: state.newPost }
            return stateCopy = {
                ...state, newPost: '',
                postsData: [...state.postsData,
                    newPost]
            }
        }
        case UPDATE_NEW_POST_TEXT: {
            return stateCopy = {
                ...state,
                newPost: action.newText
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
export default profileReducer