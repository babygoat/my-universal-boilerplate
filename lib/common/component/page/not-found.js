'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactRouterDom = require('react-router-dom');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Page Not Found';
var NotFoundPage = function NotFoundPage() {
  return _react2.default.createElement(
    'div',
    { className: 'container mt-4' },
    _react2.default.createElement(_reactHelmet2.default, { title: title }),
    _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
        'div',
        { className: 'col-12' },
        _react2.default.createElement(
          'h1',
          null,
          title
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            _reactRouterDom.Link,
            { to: _routes.HOME_PAGE_ROUTE },
            'Go to the homepage'
          ),
          '.'
        )
      )
    )
  );
};

exports.default = NotFoundPage;