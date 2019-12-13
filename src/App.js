import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import LandingPage from './pages/Landing-page';
import ChooseFirst from './pages/Choose-first';
import ChooseSecond from './pages/Choose-second';
import ReciptList from './pages/Recipt-list';
import ReciptPage from './pages/Recipt-page';
import SearchList from './pages/Search-list';
import Admin from './pages/Admin';

const App = (props) => {
  useEffect(() => {
    fetchRecipe();
  }, []);

  const [recipe, setRecipes] = useState([]);
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');

  const fetchRecipe = async () => {
    const data = await fetch('http://localhost:3000/recipes/');
    const workingData = await data.json();
    setRecipes(workingData);
  };

  const findRecipe = recipe.find(rec => rec._id === chosenRecipe);


  const findRecipeBasedOnOne = recipe.filter(rec => rec.category1.find(r => r === categoryOne));

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
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
