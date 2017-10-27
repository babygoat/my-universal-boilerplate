'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sayHelloAsync = exports.sayHelloAsyncFailure = exports.sayHelloAsyncSuccess = exports.sayHelloAsyncRequest = exports.sayHello = exports.SAY_HELLO_ASYNC_FAILURE = exports.SAY_HELLO_ASYNC_SUCCESS = exports.SAY_HELLO_ASYNC_REQUEST = exports.SAY_HELLO = undefined;

require('isomorphic-fetch');

var _reduxActions = require('redux-actions');

var _routes = require('../../common/routes');

var SAY_HELLO = exports.SAY_HELLO = 'SAY_HELLO';

var SAY_HELLO_ASYNC_REQUEST = exports.SAY_HELLO_ASYNC_REQUEST = 'SAY_HELLO_ASYNC_REQUEST';
var SAY_HELLO_ASYNC_SUCCESS = exports.SAY_HELLO_ASYNC_SUCCESS = 'SAY_HELLO_ASYNC_SUCCESS';
var SAY_HELLO_ASYNC_FAILURE = exports.SAY_HELLO_ASYNC_FAILURE = 'SAY_HELLO_ASYNC_FAILURE';

var sayHello = exports.sayHello = (0, _reduxActions.createAction)(SAY_HELLO);
var sayHelloAsyncRequest = exports.sayHelloAsyncRequest = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_REQUEST);
var sayHelloAsyncSuccess = exports.sayHelloAsyncSuccess = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_SUCCESS);
var sayHelloAsyncFailure = exports.sayHelloAsyncFailure = (0, _reduxActions.createAction)(SAY_HELLO_ASYNC_FAILURE);

var sayHelloAsync = exports.sayHelloAsync = function sayHelloAsync(num) {
  return function (dispatch) {
    dispatch(sayHelloAsyncRequest());
    return fetch((0, _routes.helloEndpointRoute)(num), { method: 'GET' }).then(function (res) {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    }).then(function (data) {
      if (!data.serverMessage) {
        throw Error('No message received');
      }
      dispatch(sayHelloAsyncSuccess(data.serverMessage));
    }).catch(function () {
      dispatch(sayHelloAsyncFailure());
    });
  };
};