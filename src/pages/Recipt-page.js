import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Recipt from '../Components/Recipt/Recipt';

export default function ReciptPage() {
  return (
    <div>
      <div className="Recipt-header">ReciptTitle</div>
      <Page>
        <Link to="/recipt-list">
          recipeIntro="Mumsfiliibaba"
          recipeImg="https://placekitten.com/590/310"
          time="49"
          recipeIngredients="1 Apelsin"
          recipeInstructions="1. Ät choklad"
        />
        <div className="to-the-right">
          <Button buttonText="Tillbaka" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
