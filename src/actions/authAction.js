import axios from 'axios';
import { returnErrors } from './errorAction';
import store from '../store';
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_SETTINGS_CHANGE,
} from './types';

// setup config and header - use in all actions

export const tokenConfig = (getState) => {
  // get token from localStorage
  const { token } = getState().auth;

  // headers
  const config = {
    headers: {
      'Content-type': 'application/json',
    },
  };
  if (token) {
    console.log(token);
    config.headers['x-auth-token'] = token;
  }
  return config;
};

// Check token & load user
export const loadUser = () => (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING });

  axios
    .get('http://localhost:5000/api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
      type: USER_LOADED,
      payload: res.data,
    }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// signUp
export const signUp = ({
  name, email, password, foodType,
}) => (dispatch) => {
  // Heders
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
    // req body
  const body = JSON.stringify({
    name, email, password, foodType,
  });

  axios
    .post('http://localhost:5000/api/users', body, config)
    .then(res => dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'REGISTER_FAIL'),
      );
      dispatch({
        type: REGISTER_FAIL,
      });
    });
  console.log(body);
};

// Login user

export const login = ({ email, password }) => (dispatch) => {
  // Heders
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  // req body
  const body = JSON.stringify({ email, password });

  axios
    .post('http://localhost:5000/api/auth', body, config)
    .then(res => dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    }))
    .catch((err) => {
      dispatch(
        returnErrors(err.response.data, err.response.status, 'LOGIN_FAIL'),
      );
      dispatch({
        type: LOGIN_FAIL,
      });
    });
};


// Logout

export const logoutMe = () => {
  store.dispatch({
    type: LOGOUT_SUCCESS,
  });
};

// Change User settings

export const changeUserSettings = ({ foodType }) => (dispatch, getState) => {
  // req body
  console.log(foodType);
  const body = JSON.stringify({ foodType });

  const { id } = getState().auth;

  axios
    .put(`http://localhost:5000/api/auth/user/${id}`, body, tokenConfig(getState))
    .then(res => dispatch({
      type: USER_SETTINGS_CHANGE,
      payload: res.data,
    }))
    .catch((err) => {
      console.log(err);
      dispatch(returnErrors(err.response));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};
