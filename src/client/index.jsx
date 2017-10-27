// @flow

import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import thunkMiddleware from 'redux-thunk';
import Immutable from 'immutable';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { BrowserRouter } from 'react-router-dom';

import App from '../common/app';
import helloReducer from '../common/reducer/hello';
import { APP_CONTAINER_SELECTOR, JSS_SSR_SELECTOR } from '../common/config';
import { isProd } from '../common/util';

import $ from 'jquery';
import Tether from 'tether';

window.jQuery = $;
window.Tether = Tether;
require('bootstrap');

/* eslint-disable no-underscore-dangle */
const composeEnhancers = (isProd ? null : window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const preloadedState = window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle*/

const store = createStore(combineReducers(
  { hello: helloReducer }),
  { hello: Immutable.fromJS(preloadedState.hello) },
  composeEnhancers(applyMiddleware(thunkMiddleware))
);

const rootEl = ((document.querySelector(APP_CONTAINER_SELECTOR): any): HTMLElement);

const jssServerSide = document.querySelector(JSS_SSR_SELECTOR);
// flow-disable-next-line
jssServerSide.parentNode.removeChild(jssServerSide);

const wrapApp = (AppComponent, reduxStore) =>
  <Provider store={reduxStore}>
    <BrowserRouter>
      <AppContainer>
        <AppComponent />
      </AppContainer>
    </BrowserRouter>
  </Provider>;

ReactDOM.render(wrapApp(App, store), rootEl);

if (module.hot) {
  // flow-disable-next-line
  module.hot.accept('../common/app', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('../common/app').default;
    ReactDOM.render(wrapApp(NextApp, store), rootEl);
  });
}
