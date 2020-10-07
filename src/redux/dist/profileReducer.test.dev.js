"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _profileReducer = _interopRequireWildcard(require("./profileReducer"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var state = {
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
test('New post should be added', function () {
  var action = (0, _profileReducer.addPostActionCreator)("New post text");
  var newState = (0, _profileReducer["default"])(state, action);
  expect(newState.postsData.length).toBe(4);
  expect(newState.postsData[3].message).toBe('New post text');
});
test('message of new post should be correct', function () {
  var action = (0, _profileReducer.addPostActionCreator)("New post text");
  var newState = (0, _profileReducer["default"])(state, action);
  expect(newState.postsData.length).toBe(4);
  expect(newState.postsData[3].message).toBe('New post text');
});
test('length after deleting should be decrement', function () {
  var action = (0, _profileReducer.deletePostActionCreator)(3);
  var newState = (0, _profileReducer["default"])(state, action);
  expect(newState.postsData.length).toBe(2);
});