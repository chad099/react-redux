import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import createHistory from 'history/createBrowserHistory';
import Routes from './routes';
import { ConnectedRouter } from 'react-router-redux';
import './styles/app.scss';
import 'bootstrap';

const history = createHistory();
const store = configureStore(history);

render(
  <Provider store={store}>
    <Routes  history={history} ConnectedRouter={ConnectedRouter}/>
  </Provider>,
  document.getElementById("app")
);
