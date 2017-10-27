'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _controller = require('./controller');

var _routes = require('../common/routes');

var _renderApp = require('./render-app');

var _renderApp2 = _interopRequireDefault(_renderApp);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (app) {
  app.get(_routes.HOME_PAGE_ROUTE, function (req, res) {
    res.send((0, _renderApp2.default)(req.url, (0, _controller.homePage)()));
  });

  app.get(_routes.HELLO_PAGE_ROUTE, function (req, res) {
    res.send((0, _renderApp2.default)(req.url, (0, _controller.helloPage)()));
  });

  app.get(_routes.HELLO_ASYNC_PAGE_ROUTE, function (req, res) {
    res.send((0, _renderApp2.default)(req.url, (0, _controller.helloAsyncPage)()));
  });

  app.get((0, _routes.helloEndpointRoute)(), function (req, res) {
    res.json((0, _controller.helloEndpoint)(req.params.num));
  });

  app.get('/500', function () {
    throw Error('Fake Internal Server Error');
  });

  app.get('*', function (req, res) {
    res.status(404).send((0, _renderApp2.default)(req.url));
  });

  // eslint-disable-next-line no-unused-vars
  app.use(function (err, req, res, next) {
    // eslint-disable-next-line no-console
    console.error(err.stack);
    res.status(500).send('Something went wrond!');
  });
};