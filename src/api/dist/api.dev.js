"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authAPI = exports.userAPI = void 0;

var axios = _interopRequireWildcard(require("axios"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  headers: {
    "API-KEY": "2feaf889-078a-4e8a-bde2-ae160c7f8acd"
  }
});
var userAPI = {
  getUsers: function getUsers() {
    var currentPage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    var pageSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 10;
    return instance.get("users?page=".concat(currentPage, "&count=").concat(pageSize)).then(function (res) {
      return res.data;
    });
  },
  followUsers: function followUsers(userId) {
    return instance.post("follow/".concat(userId)).then(function (res) {
      return res.data.resultCode;
    });
  },
  unFollowUsers: function unFollowUsers(userId) {
    return instance["delete"]("follow/".concat(userId)).then(function (res) {
      return res.data.resultCode;
    });
  },
  getProfile: function getProfile(userId) {
    return instance.get("profile/".concat(userId)).then(function (res) {
      return res.data;
    });
  }
};
exports.userAPI = userAPI;
var authAPI = {
  me: function me() {
    return instance.get("auth/me").then(function (res) {
      return res.data;
    });
  }
};
exports.authAPI = authAPI;