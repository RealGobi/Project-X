import React from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst({ category1, setCategoryOne }) {
  ChooseFirst.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    category1: PropTypes.array.isRequired,
    setCategoryOne: PropTypes.func.isRequired,
  };

  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="center-grid-choose">
          <Link to="/choose-second">
            <div className="choose-button">
              { category1.map((cat1, idx) => <Button clickHandler={() => setCategoryOne(cat1)} key={idx} buttonText={cat1} buttonType="square" />) }
            </div>
          </Link>
        </span>
        <div className="next-page">
          <Link to="/landing-page">
            <Button buttonText="Tillbaka" color="mint" buttonType="small" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
