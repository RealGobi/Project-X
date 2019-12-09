import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';
import Page from '../Components/Page/Page';
import RecipeItem from '../Components/RecipeItem/RecipeItem';
import Searchinput from '../Components/Searchinput/Searchinput';
import Header from '../Components/Header/Header';

export default function SearchList() {
  return (
    <div>
      <Header headLine="Sök Recept" />
      <Page>
        <Searchinput />
        <RecipeItem
          recipeTitle="Flygande Jakob"
          recipeIntro="hej"
          recipeImg="https://placekitten.com/250/150"
        />
        <Link to="/signup">
          <Button buttonText="Tillbaka" color="mint" />
        </Link>
      </Page>
    </div>
  );
}
