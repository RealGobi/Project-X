import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/main.scss';

import './Recipt.scss';
import clock from '../../images/modernclock.svg';
import arrow from '../../images/arrow.svg';

/**
 *
 * @param {string} recipeItemtitle
 * @param {string} recipeIntro
 * @param {string} recipeImg
 * @param {string} recipeTitle
 * @param {number} time
* */

const Recipt = ({
  recipeTitle,
  recipeImg,
  time,
  recipeIntro,
  recipeIngredients,
  recipeInstructions,
}) => {
  const [showIngridients, setShowIngridients] = useState(true);
  const toogleShowIngridients = (e) => { setShowIngridients(!showIngridients); };
  return (
    <div className="recipt-content">
      <div className="time">
        <img src={clock} className="clock" alt="clock" />
        <p>Tidsåtgång: {time} min</p>
      </div>
      <img src={recipeImg} className="recipe-img" alt={recipeTitle} />
      <div className="recipe-intro">{recipeIntro}</div>
      <div>
        <div className="ingridiens-header" role="button" tabIndex="0" onClick={toogleShowIngridients}>
          <h4>Ingredienser</h4>
          <img src={arrow} className="arrow" alt="arrow" />
        </div>
        {showIngridients ? (
          <div className="ingridiens">
            <div>
              <form>
                <select className="portioner">
                  <option value="1">1 portion</option>
                  <option value="2">2 portioner</option>
                  <option value="4">4 portioner</option>
                  <option value="6">6 portioner</option>
                  <option value="8">8 portioner</option>
                </select>
              </form>
              {/* <div className="ingredientGrid"></div> */}
              {recipeIngredients.map((ing, idx) => <div key={idx}>{ing.count} {ing.unit} {ing.ingredient}</div>)}
            </div>
          </div>
        ) : (<div className="space" />)
        }
      </div>
      <div className="instructions">
        <h2>Instruktioner</h2>
        <hr />
        {recipeInstructions.map((inst, idx) => <div key={idx}>{idx+1}. {recipeInstructions[idx].inst} </div>)}
      </div>
    </div>
  );
};

Recipt.propTypes = {
  recipeTitle: PropTypes.string,
  recipeIntro: PropTypes.string,
  recipeImg: PropTypes.string,
  time: PropTypes.number,
  recipeIngredients: PropTypes.array,
  recipeInstructions: PropTypes.array,
};

Recipt.defaultProps = {
  recipeTitle: '',
  recipeIntro: '',
  recipeImg: '',
  recipeInstructions: [],
  recipeIngredients: [],
  time: '',
};

export default Recipt;
