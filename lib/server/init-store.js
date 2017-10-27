'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _immutable = require('immutable');

var _immutable2 = _interopRequireDefault(_immutable);

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _hello = require('../common/reducer/hello');

var _hello2 = _interopRequireDefault(_hello);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var initStore = function initStore(plainPartialState) {
  var preloadedState = plainPartialState ? {} : undefined;

  if (plainPartialState && plainPartialState.hello) {
    // flow-disable-next-line
    preloadedState.hello = (0, _hello2.default)(undefined, {}).merge(_immutable2.default.fromJS(plainPartialState.hello));
  }

  return (0, _redux.createStore)((0, _redux.combineReducers)({ hello: _hello2.default }), preloadedState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.default = initStore;