"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _testUtils = require("react-dom/test-utils");

var _dialogsReducer = _interopRequireDefault(require("./dialogsReducer"));

var _profileReducer = _interopRequireDefault(require("./profileReducer"));

var _sideBarReducer = _interopRequireDefault(require("./sideBarReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = {
  _state: {
    profilePage: {
      postsData: [{
        id: 1,
        message: "Hi"
      }, {
        id: 2,
        message: "First post"
      }, {
        id: 2,
        message: "Second post"
      }],
      newPost: 'it-kam'
    },
    messagesPage: {
      dialogsData: [{
        id: 1,
        name: "Dimaaaa"
      }, {
        id: 2,
        name: "Ivan"
      }, {
        id: 3,
        name: "Elena"
      }],
      messagesData: [{
        id: 1,
        message: "Hi"
      }, {
        id: 2,
        message: "Bye"
      }, {
        id: 3,
        message: "Okeyyy"
      }],
      newMessageBody: ''
    },
    sideBar: {}
  },
  getState: function getState() {
    return this._state;
  },
  _callSubscriber: function _callSubscriber() {
    console.log('render');
  },
  subscribe: function subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch: function dispatch(action) {
    this._state.profilePage = (0, _profileReducer["default"])(this._state.profilePage, action);
    this._state.messagesPage = (0, _dialogsReducer["default"])(this._state.messagesPage, action);
    this._state.sideBar = (0, _sideBarReducer["default"])(this._state.sideBar, action);

    this._callSubscriber(this._state);
  }
};
var _default = store;
exports["default"] = _default;