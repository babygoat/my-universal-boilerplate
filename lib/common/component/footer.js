'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _config = require('../config');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'div',
    { className: 'container-fluid mt-5' },
    _react2.default.createElement('hr', null),
    _react2.default.createElement(
      'footer',
      null,
      _react2.default.createElement(
        'p',
        null,
        '\xA9 ',
        _config.APP_NAME,
        ' 2017'
      )
    )
  );
};

exports.default = Footer;