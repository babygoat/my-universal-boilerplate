'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _config = require('../../config');

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var handleNavLinkClick = function handleNavLinkClick() {
  (0, _jquery2.default)('body').scrollTop(0);
  (0, _jquery2.default)('.js-navbar-collapse').collapse('hide');
};

var Nav = function Nav() {
  return _react2.default.createElement(
    'nav',
    { className: 'navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse' },
    _react2.default.createElement(
      'button',
      {
        className: 'navbar-toggler navbar-toggler-right',
        type: 'button',
        role: 'button',
        'data-toggle': 'collapse',
        'data-target': '.js-navbar-collapse'
      },
      _react2.default.createElement('span', { className: 'navbar-toggler-icon' })
    ),
    _react2.default.createElement(
      _reactRouterDom.Link,
      { to: _routes.HOME_PAGE_ROUTE, className: 'navbar-brand' },
      _config.APP_NAME
    ),
    _react2.default.createElement(
      'div',
      { className: 'js-navbar-collapse collapse navbar-collapse' },
      _react2.default.createElement(
        'ul',
        { className: 'navbar-nav mr-auto' },
        [{ route: _routes.HOME_PAGE_ROUTE, label: 'Home' }, { route: _routes.HELLO_PAGE_ROUTE, label: 'Say Hello' }, { route: _routes.HELLO_ASYNC_PAGE_ROUTE, label: 'Say Hello Asynchronously' }, { route: _routes.NOT_FOUND_DEMO_PAGE_ROUTE, label: '404 Demo' }].map(function (link) {
          return _react2.default.createElement(
            'li',
            { className: 'nav-item', key: link.route },
            _react2.default.createElement(
              _reactRouterDom.NavLink,
              {
                to: link.route,
                className: 'nav-link',
                activeStyle: { color: 'white' },
                exact: true,
                onClick: handleNavLinkClick
              },
              link.label
            )
          );
        })
      )
    )
  );
};

exports.default = Nav;