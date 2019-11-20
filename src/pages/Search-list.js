import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function SearchList() {
  return (
    <div>
      <Page>
        [Search-list]
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
