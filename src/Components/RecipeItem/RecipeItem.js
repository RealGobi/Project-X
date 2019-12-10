import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import './RecipeItem.css';

/**
 *
 * @param {string} recipeItemtitle
 * @param {string} recipeIntro
 * @param {string} recipeImg
* */

const RecipeItem = ({
  recipeTitle,
  recipeIntro,
  recipeImg,
}) => (
  <div className="Recipeitem">
    <div className="recipeitemtext">
      <h3>{recipeTitle}</h3>
      <p>{recipeIntro}</p>
    </div>
    <img src={recipeImg} alt={recipeTitle} />
  </div>
);

RecipeItem.propTypes = {
  recipeTitle: PropTypes.string,
  recipeIntro: PropTypes.string,
  recipeImg: PropTypes.string,
};

RecipeItem.defaultProps = {
  recipeTitle: '',
  recipeIntro: '',
  recipeImg: '',
};

export default RecipeItem;
