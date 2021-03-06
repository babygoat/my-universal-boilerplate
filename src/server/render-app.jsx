// @flow
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { SheetsRegistry, JssProvider } from 'react-jss';

import initStore from './init-store';
import App from '../common/app';
import {
  WDS_PORT,
  APP_CONTAINER_CLASS,
  STATIC_PATH,
  JSS_SSR_CLASS
} from '../common/config';
import { isProd } from '../common/util';

const renderApp = (location: string, plainPartialState: ?Object, routerContext: ?Object = {}) => {
  const store = initStore(plainPartialState);
  const sheets = new SheetsRegistry();
  const appHtml = ReactDOMServer.renderToString(
    <Provider store={store}>
      <StaticRouter location={location} context={routerContext}>
        <JssProvider registry={sheets}>
          <App />
        </JssProvider>
      </StaticRouter>
    </Provider>
  );
  const head = Helmet.rewind();

  return (
    `<!doctype html>
    <html>
      <head>
        ${head.title}
        ${head.meta}
        <link rel="stylesheet" href="${STATIC_PATH}/css/bootstrap.min.css">
        <style class="${JSS_SSR_CLASS}">${sheets.toString()}</style>
      </head>
      <body>
        <div class="${APP_CONTAINER_CLASS}">${appHtml}  </div>
        <script>
          window.__PRELOADED_STATE__ = ${JSON.stringify(store.getState())}
        </script>
        <script src="${isProd ? STATIC_PATH : `http://localhost:${WDS_PORT}/dist`}/js/bundle.js"></script>
      </body>
    </html>`
  );
};

export default renderApp;
