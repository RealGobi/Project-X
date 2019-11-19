import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';

/**
 *
 * @param {string} recipeItemtitle
* */

const RecipeItem = ({
  recipeTitle,
  recipeIntro,
  recipeImg,
  bg,
}) => {
  const buttonTextStyle = {
    fontFamily: 'Red Hat Text',
    fontSize: '1.2rem',
    color: '#4f4f4f',
  };
  return (
    <div className="recipeitem" style={bg}>
      <h3 style={buttonTextStyle}>{recipeTitle}</h3>
      <p style={buttonTextStyle}>{recipeIntro}</p>
      <img src={recipeImg} />
    </div>
  );
};

RecipeItem.propTypes = {
  recipeTitle: PropTypes.string,
  recipeIntro: PropTypes.string,
  recipeImg: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  bg: PropTypes.object,
};

RecipeItem.defaultProps = {
  recipeTitle: '',
  recipeIntro: '',
  recipeImg: '',
  bg: { background: '#FFC79B' },
};

export default RecipeItem;
