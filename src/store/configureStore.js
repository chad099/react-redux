import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from '../reducers';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

export default function configureStore(history, initialState){
  let finalCreateStore;
  const reduxRouterMiddleware = routerMiddleware(history);
  const middleware = [thunk, reduxRouterMiddleware];
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = finalCreateStore(rootReducer, initialState);
  return store;
}
