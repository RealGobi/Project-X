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
  color,
}) => {
  let bg;

  switch (color) {
    case 'mint':
      bg = { background: '#B7DDE0' };
      break;
    case 'persica':
      bg = { background: '#FFC79B' };
      break;
    default:
      bg = { background: '#FEE19F' };
      break;
  }
  return (
    <div className="Recipeitem" style={bg}>
      <div className="recipeitemtext">
        <h3>{recipeTitle}</h3>
        <p>{recipeIntro}</p>
      </div>
      <img src={recipeImg} alt="txt" />
    </div>
  );
};

RecipeItem.propTypes = {
  recipeTitle: PropTypes.string,
  recipeIntro: PropTypes.string,
  recipeImg: PropTypes.string,
  color: PropTypes.string,
};

RecipeItem.defaultProps = {
  recipeTitle: '',
  recipeIntro: '',
  recipeImg: '',
  color: 'yellow',
};

export default RecipeItem;
