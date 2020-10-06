"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getFollowingInProgress = exports.getIsFetching = exports.getCurrentPage = exports.getTotalUsersCount = exports.getPageSize = exports.getUsers = void 0;

var _reselect = require("reselect");

var getUsersSelector = function getUsersSelector(state) {
  return state.usersPage.users;
};

var getUsers = (0, _reselect.createSelector)(getUsersSelector, function (users) {
  return users.filter(function (u) {
    return true;
  });
});
exports.getUsers = getUsers;

var getPageSize = function getPageSize(state) {
  return state.usersPage.pageSize;
};

exports.getPageSize = getPageSize;

var getTotalUsersCount = function getTotalUsersCount(state) {
  return state.usersPage.totalUsersCount;
};

exports.getTotalUsersCount = getTotalUsersCount;

var getCurrentPage = function getCurrentPage(state) {
  return state.usersPage.currentPage;
};

exports.getCurrentPage = getCurrentPage;

var getIsFetching = function getIsFetching(state) {
  return state.usersPage.isFetching;
};

exports.getIsFetching = getIsFetching;

var getFollowingInProgress = function getFollowingInProgress(state) {
  return state.usersPage.followingInProgress;
};

exports.getFollowingInProgress = getFollowingInProgress;