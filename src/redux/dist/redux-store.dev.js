"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _redux = require("redux");

var _authReducer = _interopRequireDefault(require("./authReducer"));

var _dialogsReducer = _interopRequireDefault(require("./dialogsReducer"));

var _profileReducer = _interopRequireDefault(require("./profileReducer"));

var _sideBarReducer = _interopRequireDefault(require("./sideBarReducer"));

var _usersReducer = _interopRequireDefault(require("./usersReducer"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _reduxForm = require("redux-form");

var _appReducer = _interopRequireDefault(require("./appReducer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var reducers = (0, _redux.combineReducers)({
  profilePage: _profileReducer["default"],
  dialogsPage: _dialogsReducer["default"],
  usersPage: _usersReducer["default"],
  sideBar: _sideBarReducer["default"],
  auth: _authReducer["default"],
  form: _reduxForm.reducer,
  app: _appReducer["default"]
});
var composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || _redux.compose;
var store = (0, _redux.createStore)(reducers, composeEnhancers((0, _redux.applyMiddleware)(_reduxThunk["default"])));
var _default = store;
exports["default"] = _default;