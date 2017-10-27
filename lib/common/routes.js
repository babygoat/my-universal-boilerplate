'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HOME_PAGE_ROUTE = exports.HOME_PAGE_ROUTE = '/';
var HELLO_PAGE_ROUTE = exports.HELLO_PAGE_ROUTE = '/hello';
var HELLO_ASYNC_PAGE_ROUTE = exports.HELLO_ASYNC_PAGE_ROUTE = '/hello-async';
var NOT_FOUND_DEMO_PAGE_ROUTE = exports.NOT_FOUND_DEMO_PAGE_ROUTE = '/404';

var helloEndpointRoute = exports.helloEndpointRoute = function helloEndpointRoute(num) {
  return '/ajax/hello/' + (num || ':num');
};