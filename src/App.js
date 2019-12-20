import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/authAction';


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

const App = () => {
  // fishing hooks

  useEffect(() => {
    fetchRecipe();
    store.dispatch(loadUser());
  }, []);

  const [recipe, setRecipes] = useState([]);
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');

  // get db

  const fetchRecipe = async () => {
    const data = await fetch('http://localhost:5000/api/recipe');
    const workingData = await data.json();
    setRecipes(workingData);
  };

  // filter out recipe

  const findRecipe = recipe.find(rec => rec._id === chosenRecipe);
  const findRecipeBasedOnOne = recipe.filter(rec => rec.category1.find(r => r === categoryOne));

  // filter out category

  // collect all categorys to one array
  let category1 = [];
  const collectCategory1 = () => {
    recipe.map(cat => cat.category1.map(tac => category1.push(tac)));
  };
  collectCategory1();
  const categorylist1 = category1;
  // remove duplicates
  category1 = Array.from(new Set(categorylist1.map(JSON.stringify))).map(JSON.parse);

  let category2 = [];
  const collectCategory2 = () => {
    recipe.map(cat => cat.category2.map(tac => category2.push(tac)));
  };
  collectCategory2();
  const categorylist2 = category2;
  // remove duplicates
  category2 = Array.from(new Set(categorylist2.map(JSON.stringify))).map(JSON.parse);

  // Router and render

  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Switch>
            <Route path="/" exact render={() => <Login />} />
            <Route path="/signup" component={SignUp} />
            <Route path="/landing-page" component={LandingPage} />
            <Route path="/choose-first" render={() => <ChooseFirst recipe={recipe} setCategoryOne={setCategoryOne} category1={category1} />} />
            <Route path="/choose-second" render={() => <ChooseSecond findRecipeBasedOnOne={findRecipeBasedOnOne} setCategoryTwo={setCategoryTwo} />} />
            <Route path="/recipt-list" render={() => <ReciptList findRecipeBasedOnOne={findRecipeBasedOnOne} setChosenRecipe={setChosenRecipe} />} />
            <Route path="/recipt-page" render={() => <ReciptPage findRecipe={findRecipe} />} />
            <Route path="/search-list" render={() => <SearchList setChosenRecipe={setChosenRecipe} recipe={recipe} category1={category1} category2={category2} />} />
            <Route path="/admin" render={() => <Admin recipe={recipe} />} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
};


export default App;
