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
} from '../actions/types';


const initialState = {
  token: localStorage.getItem('token'),
  name: localStorage.getItem('name'),
  foodType: localStorage.getItem('foodType'),
  isAdmin: localStorage.getItem('isAdmin'),
  isAuthenticated: null,
  isLoading: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    case LOGIN_SUCCESS:
    case REGISTER_SUCCESS:
      localStorage.setItem('token', action.payload.token);
      localStorage.setItem('isAdmin', action.payload.user.isAdmin);
      localStorage.setItem('name', action.payload.user.name);
      localStorage.setItem('foodType', action.payload.user.foodType);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        isAdmin: action.payload.user.isAdmin,
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      localStorage.removeItem('isAdmin');
      localStorage.removeItem('name');
      localStorage.removeItem('foodType');
      return {
        ...state,
        token: null,
        name: null,
        isAdmin: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    case USER_SETTINGS_CHANGE:
      localStorage.setItem('foodType', action.payload.user.foodType);
      return {
        ...state,
        ...action.payload,
        isAuthenticated: true,
        isLoading: false,
        user: action.payload,
      };
    default:
      return state;
  }
}
