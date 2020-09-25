import { act } from "react-dom/test-utils"
import dialogsReducer from "./dialogsReducer"
import profileReducer from "./profileReducer"
import sideBarReducer from "./sideBarReducer"

let store = {
    _state: {
        profilePage: {
            postsData: [
                { id: 1, message: "Hi" },
                { id: 2, message: "First post" },
                { id: 2, message: "Second post" },
            ],
            newPost: 'it-kam'
        },
        messagesPage: {

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
        },
        sideBar: {

        }
    },
    getState() {
        return this._state
    },
    _callSubscriber() {
        console.log('render');
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },
    dispatch(action) { 
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
        this._state.sideBar = sideBarReducer(this._state.sideBar, action)
        this._callSubscriber(this._state)
    }
}



export default store