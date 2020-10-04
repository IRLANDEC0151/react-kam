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
    ]
}
const dialogsReducer = (state = initialState, action) => {
    let stateCopy = { ...state, messagesData: [...state.messagesData] }
    switch (action.type) {
        case SEND_MESSAGE: {
            let body = action.newMessageBody
            return stateCopy = {
                ...state,
                messagesData: [...state.messagesData, { id: stateCopy.messagesData.length + 1, message: body }],
            }
        }
    
        default:
            return state
    }
}
export const sendMessageActionCreator = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer