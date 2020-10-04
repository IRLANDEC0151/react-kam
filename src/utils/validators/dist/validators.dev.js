"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.maxLength = exports.requiredField = void 0;

var requiredField = function requiredField(value) {
  if (value) {
    return undefined;
  }

  return 'error message';
};

exports.requiredField = requiredField;

var maxLength = function maxLength(length) {
  return function (value) {
    if (value.length > length) {
      return 'error message';
    }

    return undefined;
  };
};

exports.maxLength = maxLength;