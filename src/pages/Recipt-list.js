import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function ReciptList() {
  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link to="recipt-page">
          <RecipeItem
            recipeTitle="Flygande Jakob"
              recipeIntro="Loerklasjfkajsfköasfhja asfklfka akjsfka kajs afksj asfklji afjskö"
              recipeImg="https://placekitten.com/140/120"
          />
        </Link>
        <Link to="/choose-second">
          <Button buttonText="Tillbaka" color="mint" />
        </Link>
      </Page>
    </div>
  );
}
