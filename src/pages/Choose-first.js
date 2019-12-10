import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst(recipe, setCategoryOne) {
  ChooseFirst.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    recipe: PropTypes.array.isRequired,
    setCategoryOne: PropTypes.func.isRequired,

  };

  // collect all categorys to one array (and color)
  let category = [];
  const collectCategory = () => {
    recipe.map(cat => cat.category1.map(tac => category.push(tac)));
    console.log(category);
  };
  collectCategory();

  // remove duplicates
  const data = category;
  category = Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);
  console.log(category);

  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            { category.map((cat1, idx) => <Button clickHandler={() => setCategoryOne(cat1.value)} key={idx} buttonText={cat1.value} buttonType="square" color={cat1.color} />) }
          </div>
        </span>
        <div className="next-page">
          <Link to="/landing-page">
            <Button buttonText="Back" color="mint" />
          </Link>
          <Link to="/choose-second">
            <Button buttonText="Välj Första" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
