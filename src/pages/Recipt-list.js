import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';
import { Reload } from '../Components/misc/Reload';

export default function ReciptList({ findRecipeBasedOnOne, setChosenRecipe }) {
  Reload(findRecipeBasedOnOne);

  ReciptList.propTypes = {
    findRecipeBasedOnOne: PropTypes.array.isRequired,
  };
  const listResults = findRecipeBasedOnOne;

  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link to="recipt-page">
          {
            listResults.map(rec => (
              <span key={rec._id} onClick={() => setChosenRecipe(rec._id)}>
                <RecipeItem
                  recipeTitle={rec.title}
                  recipeIntro={rec.description}
                  recipeImg={rec.imageLink}
                />
              </span>
            ))
          }
        </Link>
        <div className="next-page">
          <Link to="/choose-second">
            <Button buttonText="Tillbaka" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
