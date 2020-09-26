"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setTotalUserCountActionCreator = exports.setCurrentPageActionCreator = exports.setUsersActionCreator = exports.unFollowUserToFriendsActionCreator = exports.followUserToFriendsActionCreator = exports.uploadUsersActionCreator = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPLOAD_USERS = 'UPLOAD-USERS';
var FOLLOW_USER_TO_FRIENDS = 'FOLLOW-USER-TO-FRIENDS';
var UNFOLLOW_USER_TO_FRIENDS = 'UNFOLLOW-USER-TO-FRIENDS';
var SET_USERS = 'SET-USERS';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
var initialState = {
  users: [],
  pageSize: 90,
  totalUsersCount: 0,
  currentPage: 1
};

var usersReducer = function usersReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case UPLOAD_USERS:
      {
        return 0;
      }

    case FOLLOW_USER_TO_FRIENDS:
      {
        return _objectSpread({}, state, {
          users: state.users.map(function (u) {
            if (u.id === action.userId) {
              return _objectSpread({}, u, {
                followed: true
              });
            }

            return u;
          })
        });
      }

    case UNFOLLOW_USER_TO_FRIENDS:
      {
        return _objectSpread({}, state, {
          users: state.users.map(function (u) {
            if (u.id === action.userId) {
              return _objectSpread({}, u, {
                followed: false
              });
            }

            return u;
          })
        });
      }

    case SET_USERS:
      {
        return _objectSpread({}, state, {
          users: action.users
        });
      }

    case SET_CURRENT_PAGE:
      {
        return _objectSpread({}, state, {
          currentPage: action.currentPage
        });
      }

    case SET_TOTAL_USERS_COUNT:
      {
        return _objectSpread({}, state, {
          totalUsersCount: action.totalUsersCount
        });
      }

    default:
      return state;
  }
};

var uploadUsersActionCreator = function uploadUsersActionCreator() {
  return {
    type: UPLOAD_USERS
  };
};

exports.uploadUsersActionCreator = uploadUsersActionCreator;

var followUserToFriendsActionCreator = function followUserToFriendsActionCreator(userId) {
  return {
    type: FOLLOW_USER_TO_FRIENDS,
    userId: userId
  };
};

exports.followUserToFriendsActionCreator = followUserToFriendsActionCreator;

var unFollowUserToFriendsActionCreator = function unFollowUserToFriendsActionCreator(userId) {
  return {
    type: UNFOLLOW_USER_TO_FRIENDS,
    userId: userId
  };
};

exports.unFollowUserToFriendsActionCreator = unFollowUserToFriendsActionCreator;

var setUsersActionCreator = function setUsersActionCreator(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsersActionCreator = setUsersActionCreator;

var setCurrentPageActionCreator = function setCurrentPageActionCreator(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurrentPageActionCreator = setCurrentPageActionCreator;

var setTotalUserCountActionCreator = function setTotalUserCountActionCreator(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

exports.setTotalUserCountActionCreator = setTotalUserCountActionCreator;
var _default = usersReducer;
exports["default"] = _default;