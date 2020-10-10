"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.savePhoto = exports.updateUserStatus = exports.getUserStatus = exports.getUserProfile = exports.setPhoto = exports.setUserStatus = exports.setUserProfile = exports.deletePostActionCreator = exports.addPostActionCreator = void 0;

var _api = require("../api/api");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADD_POST = 'ADD-POST';
var DELETE_POST = 'DELETE_POST';
var SET_USER_PROFILE = 'SET_USER_PROFILE';
var SET_STATUS = 'SET_STATUS';
var SET_PHOTO = 'SET_PHOTO';
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
  profileInfo: null,
  status: ''
};

var profileReducer = function profileReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case ADD_POST:
      {
        var newPost = {
          id: state.postsData.length + 1,
          message: action.newPostBody
        };
        return _objectSpread({}, state, {
          postsData: [].concat(_toConsumableArray(state.postsData), [newPost])
        });
      }

    case SET_USER_PROFILE:
      {
        return _objectSpread({}, state, {
          profileInfo: action.profileInfo
        });
      }

    case SET_STATUS:
      {
        return _objectSpread({}, state, {
          status: action.status
        });
      }

    case DELETE_POST:
      {
        return _objectSpread({}, state, {
          postsData: state.postsData.filter(function (p) {
            return p.id != action.postId;
          })
        });
      }

    case SET_PHOTO:
      {
        return _objectSpread({}, state, {
          profileInfo: _objectSpread({}, state.profileInfo, {
            photos: action.photos
          })
        });
      }

    default:
      return state;
  }
};

var addPostActionCreator = function addPostActionCreator(newPostBody) {
  return {
    type: ADD_POST,
    newPostBody: newPostBody
  };
};

exports.addPostActionCreator = addPostActionCreator;

var deletePostActionCreator = function deletePostActionCreator(postId) {
  return {
    type: DELETE_POST,
    postId: postId
  };
};

exports.deletePostActionCreator = deletePostActionCreator;

var setUserProfile = function setUserProfile(profileInfo) {
  return {
    type: SET_USER_PROFILE,
    profileInfo: profileInfo
  };
};

exports.setUserProfile = setUserProfile;

var setUserStatus = function setUserStatus(status) {
  return {
    type: SET_STATUS,
    status: status
  };
};

exports.setUserStatus = setUserStatus;

var setPhoto = function setPhoto(photos) {
  return {
    type: SET_PHOTO,
    photos: photos
  };
}; //thunk


exports.setPhoto = setPhoto;

var getUserProfile = function getUserProfile(userId) {
  return function (dispatch) {
    return _api.profileAPI.getProfile(userId).then(function (data) {
      dispatch(setUserProfile(data));
    });
  };
};

exports.getUserProfile = getUserProfile;

var getUserStatus = function getUserStatus(userId) {
  return function (dispatch) {
    return _api.profileAPI.getStatus(userId).then(function (res) {
      dispatch(setUserStatus(res));
    });
  };
};

exports.getUserStatus = getUserStatus;

var updateUserStatus = function updateUserStatus(status) {
  return function (dispatch) {
    return _api.profileAPI.updateStatus(status).then(function (res) {
      if (res.data.resultCode === 0) {
        dispatch(setUserStatus(status));
      }
    });
  };
};

exports.updateUserStatus = updateUserStatus;

var savePhoto = function savePhoto(file) {
  return function _callee(dispatch) {
    var res;
    return regeneratorRuntime.async(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return regeneratorRuntime.awrap(_api.profileAPI.savePhoto(file));

          case 2:
            res = _context.sent;

            if (res.data.resultCode === 0) {
              dispatch(setPhoto(res.data.data.photos));
            }

          case 4:
          case "end":
            return _context.stop();
        }
      }
    });
  };
};

exports.savePhoto = savePhoto;
var _default = profileReducer;
exports["default"] = _default;