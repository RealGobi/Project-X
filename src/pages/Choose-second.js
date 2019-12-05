import React from 'react';
import { Link } from 'react-router-dom';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseSecond() {
  return (
    <div>
      <Header headLine="Välj Andra" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            <Button buttonText="Rotfrukt" color="persica" buttonType="square" />
            <Button buttonText="Potatis" color="persica" buttonType="square" />
            <Button buttonText="Bröd" color="persica" buttonType="square" />
            <Button buttonText="Matvete" color="mint" buttonType="square" />
            <Button buttonText="Pasta" color="mint" buttonType="square" />
            <Button buttonText="Quinoa" color="mint" buttonType="square" />
            <Button buttonText="Couscous" color="mint" buttonType="square" />
            <Button buttonText="Ris" buttonType="square" />
          </div>
        </span>
        <div className="next-page">
          <Link to="/choose-first">
            <Button buttonText="Back" color="mint" />
          </Link>
          <Link to="/recipt-list">
            <Button buttonText="Se resultat" color="mint" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
