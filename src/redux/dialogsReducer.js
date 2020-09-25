const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY'
const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
    dialogsData: [
        { id: 1, name: "Dima" },
        { id: 2, name: "Ivan" },
        { id: 3, name: "Elena" },
    ],
    messagesData: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Bye" },
        { id: 3, message: "Okey" },
    ],
    newMessageBody: ''
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state, messagesData: [...state.messagesData] }
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = stateCopy.newMessageBody
            return stateCopy = {
                ...state,
                messagesData: [...state.messagesData, { id: stateCopy.messagesData.length + 1, message: body }],
                newMessageBody: ''
            }
        }
        case UPDATE_NEW_MESSAGE_BODY: {
            return stateCopy = { ...state, newMessageBody: action.newText }
        }
        default:
            return state
    }
}
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE, })
export const updateNewMessageBodyActionCreator = (text) => ({
    type: UPDATE_NEW_MESSAGE_BODY, newText: text
})
export default dialogsReducer