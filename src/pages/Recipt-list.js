import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function ReciptList() {
  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link href="/Recipt-page">
          <a>
            <RecipeItem
              recipeTitle="Flygande Jakob"
              recipeIntro="Loerklasjfkajsfköasfhja asfklfka akjsfka kajs afksj asfklji afjskö"
              recipeImg="https://placekitten.com/140/120"
            />
          </a>
        </Link>
        <Link href="/Recipt-page">
          <a>
            <RecipeItem
              recipeTitle="Flygande Jakob"
              recipeIntro="Loerklasjfkajsfköasfhja asfklfka akjsfka kajs afksj asfklji afjskö"
              recipeImg="https://placekitten.com/140/120"
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
