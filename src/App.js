import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from './store';
import { loadUser } from './actions/authAction';
import { getRecipes } from './actions/recipeAction';

// pages

import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import LandingPage from './pages/Landing-page';
import ChooseFirst from './pages/Choose-first';
import ChooseSecond from './pages/Choose-second';
import ReciptList from './pages/Recipt-list';
import ReciptPage from './pages/Recipt-page';
import SearchList from './pages/Search-list';
import Admin from './pages/Admin';

const App = (getState) => {
  const { recipes } = getState.recipe;
  const { isAuthenticated } = getState;
  console.log(recipes);
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  // fishing hooks


  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');

  // filter out recipe

  console.log(recipes);
  const findRecipe = recipes.find(rec => rec._id === chosenRecipe);
  const findRecipeBasedOnOne = recipes.filter(rec => rec.category1.find(r => r === categoryOne));

  // filter out category

  // collect all categorys to one array
  let category1 = [];
  const collectCategory1 = () => {
    recipes.map(cat => cat.category1.map(tac => category1.push(tac)));
  };
  collectCategory1();
  const categorylist1 = category1;
  // remove duplicates
  category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);

  let category2 = [];
  const collectCategory2 = () => {
    recipes.map(cat => cat.category2.map(tac => category2.push(tac)));
  };
  collectCategory2();
  const categorylist2 = category2;
  // remove duplicates
  category2 = Array.from(new Set(categorylist2.map(JSON.stringify))).map(JSON.parse);

  // Protected Routes - you need to be authenticated to reach this routes
  // eslint-disable-next-line react/prop-types
  const ProtectedRoutes = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props => (isAuthenticated
        ? <Component {...props} />
        : <Redirect to="/" />
      )}
    />
  );
  console.log(isAuthenticated);


  // Router and render

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Login />} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoutes path="/landing-page" component={LandingPage} />
          <ProtectedRoutes path="/choose-first" render={() => <ChooseFirst recipe={recipes} setCategoryOne={setCategoryOne} category1={category1} />} />
          <ProtectedRoutes path="/choose-second" render={() => <ChooseSecond findRecipeBasedOnOne={findRecipeBasedOnOne} setCategoryTwo={setCategoryTwo} />} />
          <ProtectedRoutes path="/recipt-list" render={() => <ReciptList findRecipeBasedOnOne={findRecipeBasedOnOne} setChosenRecipe={setChosenRecipe} />} />
          <ProtectedRoutes path="/recipt-page" render={() => <ReciptPage findRecipe={findRecipe} />} />
          <ProtectedRoutes path="/search-list" render={() => <SearchList setChosenRecipe={setChosenRecipe} recipe={recipes} category1={category1} category2={category2} />} />
          <ProtectedRoutes path="/admin" render={() => <Admin recipes={recipes} />} />
        </Switch>
      </div>
    </Router>
  );
};

// prop types
App.propTypes = {
  getRecipes: PropTypes.func.isRequired,
  recipe: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getRecipes })(App);
