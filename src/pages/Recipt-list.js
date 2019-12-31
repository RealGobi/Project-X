/* eslint-disable no-underscore-dangle */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';
import { Reload } from '../Components/misc/Reload';

export default function ReciptList({ findRecipeBasedOnTwo, setChosenRecipe }) {
  // if user relodpage, you get thrown back to landing-page.
  Reload(findRecipeBasedOnTwo);

  ReciptList.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    findRecipeBasedOnTwo: PropTypes.array.isRequired,
    setChosenRecipe: PropTypes.func.isRequired,
  };
  const listResults = findRecipeBasedOnTwo;

  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link to="recipt-page">
          {
            listResults.map(rec => (
              // eslint-disable-next-line jsx-a11y/click-events-have-key-events
              <div key={rec._id} onClick={() => setChosenRecipe(rec._id)} className="margin-recipt-list">
                <RecipeItem
                  recipeTitle={rec.title}
                  recipeIntro={`${rec.description.substring(0, 75)}...`}
                  recipeImg={rec.imageLink}
                />
              </div>
            ))
          }
        </Link>
        <div className="next-page">
          <Link to="/choose-second" className="btn-admin-left">
            <Button buttonText="Tillbaka" color="mint" buttonType="small" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
