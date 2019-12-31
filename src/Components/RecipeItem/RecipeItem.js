import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import './RecipeItem.scss';

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
    <h3 className="item">{recipeTitle}</h3>
    <div className="recipeitemtext">
      <p>{recipeIntro}</p>
    </div>
    <div className="item2">
      <img src={recipeImg} alt={recipeTitle} />
    </div>
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
