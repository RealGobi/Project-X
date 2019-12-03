import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Recipt from '../Components/Recipt/Recipt';

export default function ReciptPage() {
  return (
    <div>
      <div className="Recipt-header">ReciptTitle</div>
      <Page>
        <Recipt
          recipeIntro="Mumsfiliibaba"
          recipeImg="https://placekitten.com/590/310"
          time="49"
          recipeIngredients="1 Apelsin"
          recipeInstructions="1. Ät choklad"
        />
        <div className="to-the-right">
          <Link href="/Recipt-list">
            <a>
              <Button buttonText="Tillbaka" color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
