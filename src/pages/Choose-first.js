import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst(props) {
  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            {props.recipe.map(c => (
              <div>{c.category1.map((cat) => <Button buttonText={cat} color={c.color} buttonType="square" />)}</div>
            ))
          }
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
