import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseSecond(props) {
  ChooseSecond.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    recipe: PropTypes.array.isRequired,
  };
  // collect all categorys to one array (and color)
  let category = [];
  const collectCategory = () => {
    props.recipe.map(cat => cat.category2.map(tac => category.push(tac)));
    console.log(category);
  };
  collectCategory();
  // remove duplicates
  const myData = category;
  category = Array.from(new Set(myData.map(JSON.stringify))).map(JSON.parse);
  console.log(category);
  return (
    <div>
      <Header headLine="Välj Andra" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            { category.map((cat1, idx) => <Button key={idx} buttonText={cat1.value} buttonType="square" color={cat1.color} />) }
          </div>
        </span>
        <div className="next-page">
          <Link to="/choose-first">
            <Button buttonText="Back" color="mint" />
          </Link>
          <Link to="/recipt-list">
            <Button buttonText="Välj Andra" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
