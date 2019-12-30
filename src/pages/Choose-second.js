import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import { Reload } from '../Components/misc/Reload';

export default function ChooseSecond({ findRecipeBasedOnOne, setCategoryTwo }) {
  /* eslint-disable import/prefer-default-export */
  Reload(findRecipeBasedOnOne);
  ChooseSecond.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    findRecipeBasedOnOne: PropTypes.array.isRequired,
    setCategoryTwo: PropTypes.func.isRequired,
  };
  // collect all categorys to one array (and color)
  let category = [];
  const collectCategory = () => {
    findRecipeBasedOnOne.map(cat => cat.category2.map(tac => category.push(tac)));
  };
  collectCategory();
  // remove duplicates
  const data = category;
  category = Array.from(new Set(data.map(JSON.stringify))).map(JSON.parse);

  return (
    <div>
      <Header headLine="Välj Andra" />
      <Page>
        <span className="center-grid-choose">
          <Link to="/recipt-list">
            <div className="choose-button">
              { category.map((cat2, idx) => <Button clickHandler={() => setCategoryTwo(cat2)} key={idx} buttonText={cat2} buttonType="square" />) }
            </div>
          </Link>
        </span>
        <div className="next-page">
          <Link to="/choose-first">
            <Button buttonText="Tillbaka" color="mint" />
          </Link>
          {/*  <Link to="/recipt-list">
            <Button buttonText="Välj Andra" color="mint" />
          </Link> */}
        </div>
      </Page>
    </div>
  );
}
