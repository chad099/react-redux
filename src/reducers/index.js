import {combineReducers} from 'redux';
import user from './user';
import auth from './auth';
import { routerReducer } from 'react-router-redux';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  routing: routerReducer,
  form: formReducer,
  user,
  auth
});

export default rootReducer;
