import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

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
import isAuthenticated from './Auth/auth';

// costum hooks

import useLocalState from './Hooks/localStorgeHook';
import useFetch from './Hooks/useFetch';

const App = (props) => {
  // fishing hooks and state

  useEffect(() => {
    isAuthenticated();
    fetchRecipe();
  }, []);

  const [recipe, setRecipes] = useState([]);
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');

  // sessionStorage

  const [tokens, setTokens] = useLocalState('token');
  const [userName, setUserName] = useLocalState('useName');
  const [food, setFood] = useLocalState('foodType');

  // get db

  const fetchRecipe = async () => {
    const data = await fetch('http://localhost:3000/recipes/');
    const workingData = await data.json();
    setRecipes(workingData);
  };

  // filter out recipe

  const findRecipe = recipe.find(rec => rec._id === chosenRecipe);
  const findRecipeBasedOnOne = recipe.filter(rec => rec.category1.find(r => r === categoryOne));


  // Login func

  const userApi = useFetch(
    'http://localhost:3000/user/login',
  );
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const submitHandler = async () => {
    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email, password);
    await userApi
      .post({
        email,
        password,
      })
      .then((data) => {
        const { token, name, foodType } = data;
        setTokens(token);
        setUserName(name);
        setFood(foodType);
        isAuthenticated();
      });
  };
  console.log(`Token:${tokens}`);
  console.log(`Name:${userName}`);
  console.log(`FoodType:${food}`);

  // Router and render

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Login submitHandler={submitHandler} setEmail={setEmail} setPassword={setPassword} />} />
          <Route path="/signup" component={SignUp} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/choose-first" render={() => <ChooseFirst recipe={recipe} setCategoryOne={setCategoryOne} />} />
          <Route path="/choose-second" render={() => <ChooseSecond findRecipeBasedOnOne={findRecipeBasedOnOne} setCategoryTwo={setCategoryTwo} />} />
          <Route path="/recipt-list" render={() => <ReciptList findRecipeBasedOnOne={findRecipeBasedOnOne} setChosenRecipe={setChosenRecipe} />} />
          <Route path="/recipt-page" render={() => <ReciptPage findRecipe={findRecipe} />} />
          <Route path="/search-list" render={() => <SearchList setChosenRecipe={setChosenRecipe} recipe={recipe} />} />
          <Route path="/admin" render={() => <Admin recipe={recipe} />} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
