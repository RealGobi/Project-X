import axios from 'axios';
import { returnErrors } from './errorAction';

import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
} from './types';

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
      dispatch(returnErrors(err.response.data, err.response.status));
      dispatch({
        type: AUTH_ERROR,
      });
    });
};

// signUp
export const signUp = ({
  name, email, password, foodType, props,
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


// Logout user

export const logout = () => ({
  type: LOGOUT_SUCCESS,
});

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
    config.header['x-auth-token'] = token;
    console.log(token);
  }
  return config;
};
