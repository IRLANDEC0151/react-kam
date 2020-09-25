"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.setUsersActionCreator = exports.unFollowUserToFriendsActionCreator = exports.followUserToFriendsActionCreator = exports.uploadUsersActionCreator = void 0;

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
var initialState = {
  users: [{
    id: 1,
    fullName: "Dmitry",
    status: 'I am boss',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    followed: false
  }, {
    id: 2,
    fullName: "Elena",
    status: 'I am boss2',
    location: {
      city: 'Moscow',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 3,
    fullName: "Alex",
    status: 'I am boss3',
    location: {
      city: 'SPB',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 4,
    fullName: "Dmitry",
    status: 'I am boss',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    followed: false
  }, {
    id: 5,
    fullName: "Elena",
    status: 'I am boss2',
    location: {
      city: 'Moscow',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 6,
    fullName: "Alex",
    status: 'I am boss3',
    location: {
      city: 'SPB',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 7,
    fullName: "Dmitry",
    status: 'I am boss',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    followed: false
  }, {
    id: 8,
    fullName: "Elena",
    status: 'I am boss2',
    location: {
      city: 'Moscow',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 9,
    fullName: "Alex",
    status: 'I am boss3',
    location: {
      city: 'SPB',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 10,
    fullName: "Dmitry",
    status: 'I am boss',
    location: {
      city: 'Minsk',
      country: 'Belarus'
    },
    followed: false
  }, {
    id: 11,
    fullName: "Elena",
    status: 'I am boss2',
    location: {
      city: 'Moscow',
      country: 'Russia'
    },
    followed: true
  }, {
    id: 12,
    fullName: "Alex",
    status: 'I am boss3',
    location: {
      city: 'SPB',
      country: 'Russia'
    },
    followed: true
  }]
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
          users: [].concat(_toConsumableArray(state.users), _toConsumableArray(action.users))
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
var _default = usersReducer;
exports["default"] = _default;