import axios from 'axios';
import {
  GET_RECIPES, ADD_RECIPE, DELETE_RECIPE, RECIPES_LOADING,
} from './types';
import { tokenConfig } from './authAction';
import { returnErrors } from './errorAction';

export const setRecipesLoading = () => ({
  type: RECIPES_LOADING,
});

export const getRecipes = () => (dispatch) => {
  console.log('hello');

  dispatch(setRecipesLoading());
  axios
    .get('http://localhost:5000/api/recipe')
    .then(res => dispatch({
      type: GET_RECIPES,
      payload: res.data,
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const addRecipe = recipe => (dispatch, getState) => {
  axios
    .post('http://localhost:5000/api/recipe', recipe, tokenConfig(getState))
    .then(res => dispatch({
      type: ADD_RECIPE,
      payload: res.data,
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteRecipe = id => (dispatch, getState) => {
  axios
    .delete(`http://localhost:5000/api/recipe/${id}`, tokenConfig(getState))
    // eslint-disable-next-line no-unused-vars
    .then(res => dispatch({
      type: DELETE_RECIPE,
      payload: id,
    }))
    .catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
