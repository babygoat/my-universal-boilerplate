'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _helloButton = require('../../container/hello-button');

var _helloButton2 = _interopRequireDefault(_helloButton);

var _message = require('../../container/message');

var _message2 = _interopRequireDefault(_message);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var title = 'Hello Page';

var HelloPage = function HelloPage() {
  return _react2.default.createElement(
    'div',
    { className: 'container mt-4' },
    _react2.default.createElement(_reactHelmet2.default, {
      title: title,
      meta: [{ name: 'description', content: 'A page to say hello' }, { property: 'og:title', content: title }]
    }),
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
        _react2.default.createElement(_message2.default, null),
        _react2.default.createElement(_helloButton2.default, null)
      )
    )
  );
};

exports.default = HelloPage;