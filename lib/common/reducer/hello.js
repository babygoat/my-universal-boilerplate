'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _hello = require('../action/hello');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var babelPluginFlowReactPropTypes_proptype_fromJS = require('immutable').babelPluginFlowReactPropTypes_proptype_fromJS || require('prop-types').any;

var initialState = _immutable2.default.fromJS({
  message: 'Initial reducer message',
  messageAsync: 'Initial reducer message for async call'
});

var helloReducer = function helloReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case _hello.SAY_HELLO:
      return state.set('message', action.payload);

    case _hello.SAY_HELLO_ASYNC_REQUEST:
      return state.set('messageAsync', 'Loading...');

    case _hello.SAY_HELLO_ASYNC_SUCCESS:
      return state.set('messageAsync', action.payload);

    case _hello.SAY_HELLO_ASYNC_FAILURE:
      return state.set('messageAsync', 'No message received, please check your connection');

    default:
      return state;
  }
};

exports.default = helloReducer;