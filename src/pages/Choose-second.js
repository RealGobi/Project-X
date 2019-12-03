import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseSecond() {
  return (
    <div>
      <Header headLine="Välj Andra" />
      <Page>
        <span className="centerGrid">
          <div className="select-button">          
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
          <Link href="/Choose-first">
            <a>
              <Button buttonText="Back" color="mint" />
            </a>
          </Link>
          <Link href="/Recipt-list">
            <a>
              <Button buttonText="Välj Andra" color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
