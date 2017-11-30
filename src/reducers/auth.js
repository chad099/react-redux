import {API_HOST} from '../config';
import toastr from 'toastr';
import {push} from 'react-router-redux';
const LOAD  = 'auth/LOAD';
const LOAD_FAIL = 'auth/LOAD_FAIL';
const RESET_ERRORS = 'auth/RESET_ERRORS';
const LOAD_AUTH = 'auth/LOAD_AUTH';
const LOGOUT = 'auth/LOGOUT';
const initialState = {
  errors: {},
  auth: {}
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return { ...state, loading: true };
    case LOAD_FAIL:
      return { ...state, loading: false, errors: action.error };
    case RESET_ERRORS:
      return {...state, errors: {}};
    case LOAD_AUTH:
      return {...state, auth: Object.assign({}, state.auth, action.result) };
    case LOGOUT:
      return {...state, auth: {}};
    default:
      return state;
  }
}

export function resetErrors() {
  return dispatch => dispatch({ type: RESET_ERRORS });
}

export function checkAuth() {
  return dispatch => {
    const authData = sessionStorage.getItem('auth');
    dispatch({type: LOAD_AUTH, result: JSON.parse(authData)});
  }
}

export function login(prop) {
  let responseCode = null;
  return (dispatch, getState) => new Promise(function(resolve, reject) {
    fetch(`${API_HOST}/subscriber/api/obtain-token/`, {headers: {"content-type": "application/json"}, method: 'post', body: JSON.stringify({username: prop.email, password: prop.password}) })
      .then(response => {
        console.log('response', response);
        if(response.status >= 400) {
          responseCode = response.status;
        }
        return response.json();
      })
      .then(result => {
        if (responseCode >= 400) {
          dispatch({
            type: LOAD_FAIL,
            error: result
          });
          console.log('result', result);
          return reject(result);
        }
        prop.token = result.token;
        sessionStorage.setItem('auth', JSON.stringify(prop));
        dispatch({type: LOAD_AUTH, result: prop});
        if(prop.isDashboard) {
          dispatch(push(`/dashboard`));
        } else {
          dispatch(push('/dashboard-welcome'));
        }
        return resolve(prop);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function signup(prop) {
  let responseCode = null;
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    fetch(`${API_HOST}/subscriber/api/register/`, {headers: { "content-type": "application/json"}, method: 'post', body: JSON.stringify(prop) })
      .then(response => {
        if(response.status >= 400) {
          responseCode = response.status;
        }
        return response.json();
      })
      .then(result => {
        if (responseCode >= 400) {
          dispatch({
            type: LOAD_FAIL,
            error: result
          });
          return reject(result);
        }
        return dispatch(login(prop));
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function profile() {
  let responseCode = null;
  console.log('i am gettin profile');
  return (dispatch, getState) => new Promise((resolve, reject) => {
    dispatch(resetErrors());
    dispatch({ type: LOAD });
    const {auth: {token}} = getState().auth;
    console.log('token', token);
    fetch(`${API_HOST}/subscriber/api/profile/`, {headers: { "content-type": "application/json", "Authorization": `Token ${token}`}, method: 'get'})
      .then(response => {
        if(response.status >= 400) {
          responseCode = response.status;
        }
        return response.json();
      })
      .then(result => {
        console.log('result', result)
        if (responseCode >= 400) {
          dispatch({
            type: LOAD_FAIL,
            error: result
          });
          return reject(result);
        }
        dispatch({ type: LOAD_AUTH, result: {first_name: result.first_name, last_name: result.last_name, institution: result.institution} })
        return resolve(result);
      })
      .catch(error => {
        toastr.error(error);
        dispatch({ type: LOAD_FAIL, error });
        reject(error);
      });
  });
}

export function logout() {
  return (dispatch) => new Promise(function(resolve, reject) {
    dispatch({ type: LOGOUT});
    sessionStorage.removeItem('auth');
    dispatch(push('/'));
  });
}
