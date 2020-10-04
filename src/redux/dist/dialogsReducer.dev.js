"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.sendMessageActionCreator = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SEND_MESSAGE = 'SEND-MESSAGE';
var initialState = {
  dialogsData: [{
    id: 1,
    name: "Dima"
  }, {
    id: 2,
    name: "Ivan"
  }, {
    id: 3,
    name: "Elena"
  }],
  messagesData: [{
    id: 1,
    message: "Hi"
  }, {
    id: 2,
    message: "Bye"
  }, {
    id: 3,
    message: "Okey"
  }]
};

var dialogsReducer = function dialogsReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  var stateCopy = _objectSpread({}, state, {
    messagesData: _toConsumableArray(state.messagesData)
  });

  switch (action.type) {
    case SEND_MESSAGE:
      {
        var body = action.newMessageBody;
        return stateCopy = _objectSpread({}, state, {
          messagesData: [].concat(_toConsumableArray(state.messagesData), [{
            id: stateCopy.messagesData.length + 1,
            message: body
          }])
        });
      }

    default:
      return state;
  }
};

var sendMessageActionCreator = function sendMessageActionCreator(newMessageBody) {
  return {
    type: SEND_MESSAGE,
    newMessageBody: newMessageBody
  };
};

exports.sendMessageActionCreator = sendMessageActionCreator;
var _default = dialogsReducer;
exports["default"] = _default;