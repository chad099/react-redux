import {API_HOST} from '../config';
import toastr from 'toastr';
import {push} from 'react-router-redux';
const LOAD  = 'user/LOAD';
const LOAD_FAIL = 'user/LOAD_FAIL';
const RESET_ERRORS = 'user/RESET_ERRORS';
const SET_CURRENTPROJECT = 'user/SET_CURRENTPROJECT';
const initialState = {
  errors: {},
  currentProject: []
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_FAIL:
      return { ...state, loading: false, errors: action.error };
    case RESET_ERRORS:
      return {...state, errors: {}};
    case SET_CURRENTPROJECT:
      return {...state, currentProject: action.result};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}

export function setCurrentProject(prop) {
  console.log('prop', prop);
  return dispatch => new Promise(function(resolve, reject) {
    dispatch({type: SET_CURRENTPROJECT, result: prop});
  });
}
