"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ModalExample = function ModalExample() {
  return _react2.default.createElement(
    "div",
    { className: "js-modal-example modal fade" },
    _react2.default.createElement(
      "div",
      { className: "modal-dialog" },
      _react2.default.createElement(
        "div",
        { className: "modal-content" },
        _react2.default.createElement(
          "div",
          { className: "modal-header" },
          _react2.default.createElement(
            "h5",
            { className: "modal-title" },
            "Modal title"
          ),
          _react2.default.createElement(
            "button",
            { type: "button", className: "close", "data-dismiss": "modal" },
            "\xD7"
          )
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-body" },
          "This is a Bootstrap modal. It uses jQuery."
        ),
        _react2.default.createElement(
          "div",
          { className: "modal-footer" },
          _react2.default.createElement(
            "button",
            { type: "button", role: "button", className: "btn btn-primary", "data-dismiss": "modal" },
            "Close"
          )
        )
      )
    )
  );
};

exports.default = ModalExample;