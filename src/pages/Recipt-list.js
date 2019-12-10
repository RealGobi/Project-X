import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import RecipeItem from '../Components/RecipeItem/RecipeItem';

export default function ReciptList(props) {
  ReciptList.propTypes = {
    recipe: PropTypes.array.isRequired,
  };
  const listResults = props.recipe;

  return (
    <div>
      <Header headLine="Receptlista" />
      <Page>
        <Link to="recipt-page">
          {
            listResults.map((rec, idx) => (
              <RecipeItem
                key={idx}
                recipeTitle={rec.title}
                recipeIntro={rec.description}
                recipeImg={rec.imageLink}
              />
            ))
          }
        </Link>
        <Link to="/choose-second">
          <Button buttonText="Tillbaka" color="mint" />
        </Link>
      </Page>
    </div>
  );
}
