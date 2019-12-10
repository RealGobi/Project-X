import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Recipt from '../Components/Recipt/Recipt';

export default function ReciptPage(props) {
  
  return (
    <div>
      <div className="header-recipt">
        <h1>{props.chosenFromList.title}</h1>
      </div>
      <Page>
        <Recipt
          recipeTitle={props.chosenFromList.title}
          recipeIntro="Mumsfiliibaba"
          recipeImg="https://placekitten.com/353/250"
          time="49"
          recipeIngredients="1 Apelsin"
          recipeInstructions="1. Ät choklad"
        />
        <div className="to-the-right">
          <Link to="/search-list">
            <Button buttonText="Tillbaka" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
