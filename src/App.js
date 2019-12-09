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

const App = () => {
  useEffect(() => {
    fetchRecipe();
  }, []);

  const [recipe, setRecipes] = useState([]);

  const fetchRecipe = async () => {
    const data = await fetch('http://localhost:3000/recipes/');
    const recipe = await data.json();
    setRecipes(recipe);
  };

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/landing-page" component={LandingPage} />
          <Route path="/choose-first" render={() => <ChooseFirst recipe={recipe} />} />
          <Route path="/choose-second" render={() => <ChooseSecond recipe={recipe} />} />
          <Route path="/recipt-list" render={() => <ReciptList recipe={recipe} />} />
          <Route path="/recipt-page" component={ReciptPage} />
          <Route path="/search-list" render={() => <SearchList recipe={recipe} />} />
        </Switch>
      </div>
    </Router>
  );
};


export default App;
