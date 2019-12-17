import React from 'react';
import { Link } from 'react-router-dom';
import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Recipt from '../Components/Recipt/Recipt';

export default function ReciptPage(findRecipe) {
  console.log(findRecipe.findRecipe.instructions);

  return (
    <div>
      <div className="header-recipt">
        <h1>{ findRecipe.findRecipe.title }</h1>
      </div>
      <Page>
        <Recipt          
          recipeTitle={findRecipe.findRecipe.title}
          recipeIntro={findRecipe.findRecipe.description}
          recipeImg={findRecipe.findRecipe.imageLink}
          time={findRecipe.findRecipe.time}
          recipeIngredients={findRecipe.findRecipe.ingredients}
          recipeInstructions={findRecipe.findRecipe.instructions}
        />
        <div className="next-page">
          <Link to="/search-list">
            <Button buttonText="Tillbaka" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
