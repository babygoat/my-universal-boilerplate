'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = require('react-redux');

var _hello = require('../action/hello');

var _button = require('../component/button');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps() {
  return {
    label: 'Say hello'
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    handleClick: function handleClick() {
      dispatch((0, _hello.sayHello)('Hello!'));
    }
  };
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_button2.default);