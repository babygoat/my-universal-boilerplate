'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var homePage = exports.homePage = function homePage() {
  return null;
};

var helloPage = exports.helloPage = function helloPage() {
  return {
    hello: { message: 'Server-side preloaded message' }
  };
};

var helloAsyncPage = exports.helloAsyncPage = function helloAsyncPage() {
  return {
    hello: { messageAsync: 'Server-side preloaded message for async page' }
  };
};

var helloEndpoint = exports.helloEndpoint = function helloEndpoint(num) {
  return {
    serverMessage: 'Hello from the server! (received ' + num + ')'
  };
};