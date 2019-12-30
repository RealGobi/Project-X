import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router, Switch, Route, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
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

  // see if user valid token is present
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  // fishing hooks
  const [categoryOne, setCategoryOne] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');
console.log(categoryTwo);

  // filter out recipe
  // eslint-disable-next-line no-underscore-dangle
  const findRecipe = recipes.find(rec => rec._id === chosenRecipe);
  const findRecipeBasedOnOne = recipes.filter(rec => rec.category1.find(r => r === categoryOne));
  const findRecipeBasedOnTwo = findRecipeBasedOnOne.filter(rec => rec.category2.find(r => r === categoryTwo));
  console.log(findRecipeBasedOnTwo);
  
  // get the users foodtype
  const userFoodType = localStorage.getItem('foodType');
  // make recipelist from foodtype
  const foodTypeRecipes = recipes.filter(rec => (userFoodType ? rec.foodType <= userFoodType : true));

  // collect all categorys to one array
  let category1 = [];
  const collectCategory1 = () => {
    foodTypeRecipes.map(cat => cat.category1.map(tac => category1.push(tac)));
  };
  collectCategory1();
  const categorylist1 = category1;
  // remove duplicates
  category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);

  let category2 = [];
  const collectCategory2 = () => {
    foodTypeRecipes.map(cat => cat.category2.map(tac => category2.push(tac)));
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
        ? <Component {...props} {...rest} />
        : <Redirect to="/" />
      )}
    />
  );

  // Router and render
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Login />} />
          <Route path="/signup" component={SignUp} />
          <ProtectedRoutes path="/landing-page" component={LandingPage} />
          <ProtectedRoutes
            path="/choose-first"
            component={ChooseFirst}
            recipe={recipes}
            setCategoryOne={setCategoryOne}
            category1={category1}
          />
          <ProtectedRoutes
            path="/choose-second"
            component={ChooseSecond}
            findRecipeBasedOnOne={findRecipeBasedOnOne}
            setCategoryTwo={setCategoryTwo}
          />
          <ProtectedRoutes
            path="/recipt-list"
            component={ReciptList}
            findRecipeBasedOnTwo={findRecipeBasedOnTwo}
            setChosenRecipe={setChosenRecipe}
          />
          <ProtectedRoutes
            path="/recipt-page"
            component={ReciptPage}
            findRecipe={findRecipe}
          />
          <ProtectedRoutes
            path="/search-list"
            component={SearchList}
            setChosenRecipe={setChosenRecipe}
            recipe={recipes}
            category1={category1}
            category2={category2}
          />
          <ProtectedRoutes
            path="/admin"
            component={Admin}
            recipes={recipes}
          />
          <Route path="*" render={() => <Login />} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = state => ({
  recipe: state.recipe,
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps, { getRecipes })(App);
