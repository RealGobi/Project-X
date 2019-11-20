import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function ReciptList() {
  return (
    <div>
      <Page>
        <Header headLine="Receptlista" />
        <Link href="/Recipt-page">
          <a>
            <RecipeItem
              recipeTitle="Flygande Jakob"
              recipeIntro="hej"
              recipeImg="https://placekitten.com/250/150"
            />
          </a>
        </Link>
        <Link href="/Recipt-page">
          <a>
            <RecipeItem
              recipeTitle="Flygande Jakob"
              recipeIntro="hej"
              recipeImg="https://placekitten.com/250/150"
            />
          </a>
        </Link>
        <Link href="/Choose-second">
          <a>
            <Button buttonText="Tillbaka" color="mint" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
