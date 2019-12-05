import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst() {
  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            hej
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
