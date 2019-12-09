import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function ReciptList(categoryOne, categoryTwo) {
  console.log(categoryOne);
  console.log(categoryTwo);

  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link to="recipt-page">
          <RecipeItem
            recipeTitle="Flygande Jakob"
            recipeIntro="hej"
            recipeImg="https://placekitten.com/250/150"
          />
        </Link>
        <Link to="/choose-second">
          <Button buttonText="Tillbaka" color="mint" />
        </Link>
      </Page>
    </div>
  );
}
