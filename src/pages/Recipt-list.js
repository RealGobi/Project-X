import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';
import { Reload } from '../Components/misc/Reload';

export default function ReciptList({ findRecipeBasedOnOne, setChosenRecipe }) {
  // if user relodpage, you get thrown back to landing-page.
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
              <div key={rec._id} onClick={() => setChosenRecipe(rec._id)} className="margin-recipt-list" >
                <RecipeItem
                  recipeTitle={rec.title}
                  recipeIntro={`${rec.description.substring(0, 100)}...`}
                  recipeImg={rec.imageLink}
                />
              </div>
            ))
          }
        </Link>
        <div className="next-page">
          <Link to="/choose-second">
            <Button buttonText="Tillbaka" color="mint" buttonType="small" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
