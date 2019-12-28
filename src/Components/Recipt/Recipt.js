import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../style/main.scss';

import './Recipt.scss';
import clock from '../../images/modernclock.svg';

/**
 *
 * @param {string} recipeItemtitle
 * @param {string} recipeIntro
 * @param {string} recipeImg
 * @param {string} recipeTitle
 * @param {number} time
 * @param {array} recipeInstructions
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
  const [portions, setPortions] = useState();
  const toogleShowIngridients = () => { setShowIngridients(!showIngridients); };
  const [changedPortionValue, setChangedPortionValue] = useState(false);

  const handleChangedValue = (e) => {
    setChangedPortionValue(true);
    setPortions(e.target.value);
  };
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
          {showIngridients ? <div className="arrow" alt="arrow" /> : <div className="arrow-open" alt="arrow" /> }
        </div>
        {showIngridients ? (
          <div className="ingridiens">
            <div>
              <form>
                <select className="portioner" defaultValue="4" onChange={handleChangedValue}>
                  <option value="1">1 portion</option>
                  <option value="2">2 portioner</option>
                  <option value="3">3 portioner</option>
                  <option value="4">4 portioner</option>
                  <option value="5">5 portioner</option>
                  <option value="6">6 portioner</option>
                  <option value="8">8 portioner</option>
                  <option value="10">10 portioner</option>
                </select>
              </form>
              <hr />
              {changedPortionValue ? (
                recipeIngredients.map((ing, idx) => <div key={idx}>{ing.count / 4 * portions} {ing.unit} {ing.ingredient}</div>)
              ) : (
                recipeIngredients.map((ing, idx) => <div key={idx}>{ing.count} {ing.unit} {ing.ingredient}</div>))
              }
            </div>
          </div>
        ) : (<div className="space" />)
        }
      </div>
      <div className="instructions">
        <h2>Instruktioner</h2>
        <hr />
        {recipeInstructions.map((inst, idx) => <p key={idx}>{idx + 1}. {recipeInstructions[idx].inst} </p>)}
      </div>
    </div>
  );
};

Recipt.propTypes = {
  recipeTitle: PropTypes.string,
  recipeIntro: PropTypes.string,
  recipeImg: PropTypes.string,
  time: PropTypes.number,
  recipeIngredients: PropTypes.arrayOf(PropTypes.object),
  recipeInstructions: PropTypes.arrayOf(PropTypes.object),
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
