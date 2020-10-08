"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.unFollowThunkCreator = exports.followThunkCreator = exports.getUsersThunkCreator = exports.toggleIsFollowingInProgress = exports.toggleIsFetching = exports.setTotalUserCount = exports.setCurrentPage = exports.setUsers = exports.acceptUnFollowUserToFriends = exports.acceptFollowUserToFriends = exports.uploadUsers = void 0;

var _api = require("../api/api");

var _objectHelpers = require("../utils/validators/object-helpers");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var UPLOAD_USERS = 'UPLOAD-USERS';
var FOLLOW_USER_TO_FRIENDS = 'FOLLOW-USER-TO-FRIENDS';
var UNFOLLOW_USER_TO_FRIENDS = 'UNFOLLOW-USER-TO-FRIENDS';
var SET_USERS = 'SET-USERS';
var SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
var SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
var TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
var TOGGLE_IS_FOLLOWING_IN_PROGRESS = 'TOGGLE_IS_FOLLOWING_IN_PROGRESS';
var initialState = {
  users: [],
  pageSize: 100,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: []
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
          users: (0, _objectHelpers.updateObjectInArray)(state.users, action.userId, "id", {
            followed: true
          })
        });
      }

    case UNFOLLOW_USER_TO_FRIENDS:
      {
        return _objectSpread({}, state, {
          users: (0, _objectHelpers.updateObjectInArray)(state.users, action.userId, "id", {
            followed: false
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

    case TOGGLE_IS_FETCHING:
      {
        return _objectSpread({}, state, {
          isFetching: action.isFetching
        });
      }

    case TOGGLE_IS_FOLLOWING_IN_PROGRESS:
      {
        return _objectSpread({}, state, {
          followingInProgress: action.isFetching ? [].concat(_toConsumableArray(state.followingInProgress), [action.userId]) : state.followingInProgress.filter(function (id) {
            return id !== action.userId;
          })
        });
      }

    default:
      return state;
  }
};

var uploadUsers = function uploadUsers() {
  return {
    type: UPLOAD_USERS
  };
};

exports.uploadUsers = uploadUsers;

var acceptFollowUserToFriends = function acceptFollowUserToFriends(userId) {
  return {
    type: FOLLOW_USER_TO_FRIENDS,
    userId: userId
  };
};

exports.acceptFollowUserToFriends = acceptFollowUserToFriends;

var acceptUnFollowUserToFriends = function acceptUnFollowUserToFriends(userId) {
  return {
    type: UNFOLLOW_USER_TO_FRIENDS,
    userId: userId
  };
};

exports.acceptUnFollowUserToFriends = acceptUnFollowUserToFriends;

var setUsers = function setUsers(users) {
  return {
    type: SET_USERS,
    users: users
  };
};

exports.setUsers = setUsers;

var setCurrentPage = function setCurrentPage(currentPage) {
  return {
    type: SET_CURRENT_PAGE,
    currentPage: currentPage
  };
};

exports.setCurrentPage = setCurrentPage;

var setTotalUserCount = function setTotalUserCount(totalUsersCount) {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalUsersCount: totalUsersCount
  };
};

exports.setTotalUserCount = setTotalUserCount;

var toggleIsFetching = function toggleIsFetching(isFetching) {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  };
};

exports.toggleIsFetching = toggleIsFetching;

var toggleIsFollowingInProgress = function toggleIsFollowingInProgress(isFetching, userId) {
  return {
    type: TOGGLE_IS_FOLLOWING_IN_PROGRESS,
    isFetching: isFetching,
    userId: userId
  };
}; //thunk


exports.toggleIsFollowingInProgress = toggleIsFollowingInProgress;

var getUsersThunkCreator = function getUsersThunkCreator(currentPage, pageSize) {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));

    _api.userAPI.getUsers(currentPage, pageSize).then(function (data) {
      dispatch(setCurrentPage(currentPage));
      dispatch(toggleIsFetching(false));
      dispatch(setUsers(data.items));
      dispatch(setTotalUserCount(data.totalCount));
    });
  };
};

exports.getUsersThunkCreator = getUsersThunkCreator;

var followUnfollow = function followUnfollow(dispatch, userId, apiMethod, actionCreator) {
  var res;
  return regeneratorRuntime.async(function followUnfollow$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          dispatch(toggleIsFollowingInProgress(true, userId));
          _context.next = 3;
          return regeneratorRuntime.awrap(apiMethod(userId));

        case 3:
          res = _context.sent;

          if (res.data.resultCode === 0) {
            dispatch(actionCreator(userId));
          }

          dispatch(toggleIsFollowingInProgress(false, userId));

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var followThunkCreator = function followThunkCreator(userId) {
  var apiMethod = _api.userAPI.followUsers.bind(_api.userAPI);

  return function _callee(dispatch) {
    return regeneratorRuntime.async(function _callee$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            followUnfollow(dispatch, userId, apiMethod, acceptFollowUserToFriends);

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    });
  };
};

exports.followThunkCreator = followThunkCreator;

var unFollowThunkCreator = function unFollowThunkCreator(userId) {
  var apiMethod = _api.userAPI.unFollowUsers.bind(_api.userAPI);

  return function _callee2(dispatch) {
    return regeneratorRuntime.async(function _callee2$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            followUnfollow(dispatch, userId, apiMethod, acceptUnFollowUserToFriends);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    });
  };
};

exports.unFollowThunkCreator = unFollowThunkCreator;
var _default = usersReducer;
exports["default"] = _default;