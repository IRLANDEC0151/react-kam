"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.getUserProfile = exports.setUserProfile = exports.updateNewPostActionCreator = exports.addPostActionCreator = void 0;

var _api = require("../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = 'ADD-POST';
var UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var initialState = {
  postsData: [{
    id: 1,
    message: "Hi"
  }, {
    id: 2,
    message: "First post"
  }, {
    id: 3,
    message: "Second post"
  }],
  newPost: 'it-kam',
  profileInfo: null
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        var newPost = {
          id: 5,
          message: state.newPost
        };
        return _objectSpread({}, state, {
          newPost: '',
          postsData: [].concat(_toConsumableArray(state.postsData), [newPost])
        });
      }

    case UPDATE_NEW_POST_TEXT:
      {
        return _objectSpread({}, state, {
          newPost: action.newText
        });
      }

    case SET_USER_PROFILE:
      {
        return _objectSpread({}, state, {
          profileInfo: action.profileInfo
        });
      }

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator() {
  return {
    type: ADD_POST
  };
};

exports.addPostActionCreator = addPostActionCreator;

var updateNewPostActionCreator = function updateNewPostActionCreator(text) {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

exports.updateNewPostActionCreator = updateNewPostActionCreator;

var setUserProfile = function setUserProfile(profileInfo) {
  return {
    type: SET_USER_PROFILE,
    profileInfo: profileInfo
  };
}; //thunk


exports.setUserProfile = setUserProfile;

var getUserProfile = function getUserProfile(userId) {
  return function (dispatch) {
    return _api.userAPI.getProfile(userId).then(function (data) {
      dispatch(setUserProfile(data));
    });
  };
};

exports.getUserProfile = getUserProfile;
var _default = profileReducer;
exports["default"] = _default;