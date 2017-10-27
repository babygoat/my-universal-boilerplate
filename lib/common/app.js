'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouter = require('react-router');

var _reactRouterDom = require('react-router-dom');

var _helloButton = require('./container/hello-button');

var _helloButton2 = _interopRequireDefault(_helloButton);

var _helloAsyncButton = require('./container/hello-async-button');

var _helloAsyncButton2 = _interopRequireDefault(_helloAsyncButton);

var _message = require('./container/message');

var _message2 = _interopRequireDefault(_message);

var _messageAsync = require('./container/message-async');

var _messageAsync2 = _interopRequireDefault(_messageAsync);

var _config = require('./config');

var _nav = require('./component/page/nav');

var _nav2 = _interopRequireDefault(_nav);

var _home = require('./component/page/home');

var _home2 = _interopRequireDefault(_home);

var _hello = require('./component/page/hello');

var _hello2 = _interopRequireDefault(_hello);

var _helloAsync = require('./component/page/hello-async');

var _helloAsync2 = _interopRequireDefault(_helloAsync);

var _notFound = require('./component/page/not-found');

var _notFound2 = _interopRequireDefault(_notFound);

var _footer = require('./component/footer');

var _footer2 = _interopRequireDefault(_footer);

var _routes = require('./routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    { style: { paddingTop: 54 } },
    _react2.default.createElement(_reactHelmet2.default, { titleTemplate: '%s | ' + _config.APP_NAME, defaultTitle: _config.APP_NAME }),
    _react2.default.createElement(_nav2.default, null),
    _react2.default.createElement(
      _reactRouter.Switch,
      null,
      _react2.default.createElement(_reactRouterDom.Route, { exact: true, path: _routes.HOME_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_home2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: _routes.HELLO_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_hello2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { path: _routes.HELLO_ASYNC_PAGE_ROUTE, render: function render() {
          return _react2.default.createElement(_helloAsync2.default, null);
        } }),
      _react2.default.createElement(_reactRouterDom.Route, { component: _notFound2.default })
    ),
    _react2.default.createElement(_footer2.default, null)
  );
};

exports.default = App;