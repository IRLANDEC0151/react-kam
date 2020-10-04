"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.logOut = exports.login = exports.getAuthUserData = exports.setAuthUserData = void 0;

var _api = require("../api/api");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SET_USER_DATA = 'SET_USER_DATA';
var initialState = {
  userId: null,
  email: null,
  login: null,
  isAuth: false
};

var authReducer = function authReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case SET_USER_DATA:
      {
        return _objectSpread({}, state, {}, action.data);
      }

    default:
      return state;
  }
};

var setAuthUserData = function setAuthUserData() {
  var userId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var email = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var login = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var isAuth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  return {
    type: SET_USER_DATA,
    data: {
      userId: userId,
      email: email,
      login: login,
      isAuth: isAuth
    }
  };
}; //thunk 


exports.setAuthUserData = setAuthUserData;

var getAuthUserData = function getAuthUserData() {
  return function (dispatch) {
    _api.authAPI.me().then(function (data) {
      if (data.resultCode === 0) {
        var _data$data = data.data,
            _data$data$userId = _data$data.userId,
            userId = _data$data$userId === void 0 ? data.data.id : _data$data$userId,
            email = _data$data.email,
            _login = _data$data.login;
        dispatch(setAuthUserData(userId, email, _login, true));
      }
    });
  };
}; //thunk 


exports.getAuthUserData = getAuthUserData;

var login = function login(data) {
  return function (dispatch) {
    _api.authAPI.login(data).then(function (data) {
      if (data.resultCode === 0) {
        dispatch(getAuthUserData(data));
      }
    });
  };
}; //thunk 


exports.login = login;

var logOut = function logOut(data) {
  return function (dispatch) {
    _api.authAPI.loginOut().then(function (data) {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData());
      }
    });
  };
};

exports.logOut = logOut;
var _default = authReducer;
exports["default"] = _default;