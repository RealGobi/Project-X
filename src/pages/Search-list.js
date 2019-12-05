import React from 'react';
import Link from 'next/link';

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
        <Link href="/Recipt-page">
          <a>
            <RecipeItem
              recipeTitle="Flygande Jakob"
              recipeIntro="hej"
              recipeImg="https://placekitten.com/250/150"
            />
          </a>
        </Link>
      </Page>
    </div>
  );
}
