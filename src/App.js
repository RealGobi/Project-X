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

const App = () => {
  useEffect(() => {
    fetchRecipe();
  }, []);

  const [recipe, setRecipes] = useState([]);
  const [categoryOne, setCategoryOne] = useState([]);
  const [categoryTwo, setCategoryTwo] = useState([]);
  const [chosenRecipe, setChosenRecipe] = useState('');
  const [chosenFromList, setChosenFromList] = useState({});

  const fetchRecipe = async () => {
    const data = await fetch('http://localhost:3000/recipes/');
    const workingData = await data.json();
    setRecipes(workingData);
  };
  console.log(categoryOne);
  console.log(categoryTwo);
  console.log(recipe);

  const findRecipe = recipe.find(rec => rec._id === chosenRecipe);
  console.log(findRecipe);
  // setChosenFromList(findRecipe);  
  console.log(chosenFromList);
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/choose-first" render={() => <ChooseFirst recipe={recipe} setCategoryOne={setCategoryOne} />} />
          <Route path="/choose-second" render={() => <ChooseSecond recipe={recipe} setCategoryTwo={setCategoryTwo} />} />
          <Route path="/recipt-list" render={() => <ReciptList recipe={recipe} />} />
          <Route path="/recipt-page" render={() => <ReciptPage findRecipe={findRecipe} />} />
          <Route path="/search-list" render={() => <SearchList setChosenRecipe={setChosenRecipe} recipe={recipe} />} />
          <Route path="/admin" render={() => <Admin />} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
