"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
  var label = _ref.label,
      handleClick = _ref.handleClick;
  return _react2.default.createElement(
    "button",
    {
      onClick: handleClick,
      className: "btn btn-primary",
      type: "button",
      role: "button"
    },
    label
  );
};

Button.propTypes = {
  label: require("prop-types").string.isRequired,
  handleClick: require("prop-types").func.isRequired
};
exports.default = Button;