'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _config = require('../../config');

var _modalExample = require('../modal-example');

var _modalExample2 = _interopRequireDefault(_modalExample);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
  hoverMe: {
    '&:hover': {
      color: 'red'
    }
  },
  '@media (max-width: 800px)': {
    resizeMe: {
      color: 'red'
    }
  },
  specialButton: {
    composes: ['btn', 'btn-primary'],
    backgroundColor: 'limegreen'
  }
};

var HomePage = function HomePage(_ref) {
  var classes = _ref.classes;
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_reactHelmet2.default, {
      meta: [{ name: 'description', content: 'Hello App is an app to say hello' }, { property: 'og:title', content: _config.APP_NAME }]
    }),
    _react2.default.createElement(
      'div',
      { className: 'jumbotron' },
      _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'h1',
          { className: 'display-3 mb-4' },
          _config.APP_NAME
        )
      )
    ),
    _react2.default.createElement(
      'div',
      { className: 'container' },
      _react2.default.createElement(
        'div',
        { className: 'row' },
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 mb-4' },
          _react2.default.createElement(
            'h3',
            { className: 'mb-3' },
            'Bootstrap'
          ),
          _react2.default.createElement(
            'p',
            null,
            _react2.default.createElement(
              'button',
              {
                type: 'button',
                role: 'button',
                'data-toggle': 'modal',
                'data-target': '.js-modal-example',
                className: 'btn btn-primary'
              },
              'Open Modal'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 mb-4' },
          _react2.default.createElement(
            'h3',
            { className: 'mb-3' },
            'JSS'
          ),
          _react2.default.createElement(
            'p',
            { className: classes.hoverMe },
            'Hover me.'
          ),
          _react2.default.createElement(
            'p',
            { className: classes.resizeMe },
            'Resize the window.'
          ),
          _react2.default.createElement(
            'button',
            { className: classes.specialButton },
            'Composition'
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-md-4 mb-4' },
          _react2.default.createElement(
            'h3',
            { className: 'mb-3' },
            'Websockets'
          ),
          _react2.default.createElement(
            'p',
            null,
            'Open your browser console.'
          )
        )
      )
    ),
    _react2.default.createElement(_modalExample2.default, null)
  );
};

HomePage.propTypes = {
  classes: require('prop-types').object.isRequired
};
exports.default = (0, _reactJss2.default)(styles)(HomePage);