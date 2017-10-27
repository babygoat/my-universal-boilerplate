'use strict';

var _compression = require('compression');

var _compression2 = _interopRequireDefault(_compression);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _routing = require('./routing');

var _routing2 = _interopRequireDefault(_routing);

var _config = require('../common/config');

var _util = require('../common/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _compression2.default)());
app.use(_config.STATIC_PATH, _express2.default.static('dist'));
app.use(_config.STATIC_PATH, _express2.default.static('public'));

(0, _routing2.default)(app);

app.listen(_config.WEB_PORT, function () {
  // eslint-disable-next-line no-console
  console.log('Server running on port ' + _config.WEB_PORT + ' ' + (_util.isProd ? '(production)' : '(development).\nKeep "yarn dev:wds" running in an other terminal') + '.');
});