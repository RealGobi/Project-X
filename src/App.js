import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/Sign-up';
import LandingPage from './pages/Landing-page';
import ChooseFirst from './pages/Choose-first';
import ChooseSecond from './pages/Choose-second';
import ReciptList from './pages/Recipt-list';
import ReciptPage from './pages/Recipt-page';
import SearchList from './pages/Search-list';

const App = () => (
  <Router>
    <div className="App">
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/landing-page" component={LandingPage} />
        <Route path="/choose-first" component={ChooseFirst} />
        <Route path="/choose-second" component={ChooseSecond} />
        <Route path="/recipt-list" component={ReciptList} />
        <Route path="/recipt-page" component={ReciptPage} />
        <Route path="/search-list" component={SearchList} />
      </Switch>
    </div>
  </Router>
);


export default App;
