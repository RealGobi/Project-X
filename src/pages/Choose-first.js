import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

const ChooseFirst = props => {
  return (
    <div>
      <Header headLine="Välj Första" />
      <Page>
        <span className="centerGrid">
          <div className="choose-button">
            <Button buttonText="Tofu" buttonType="square" />
            <Button buttonText="Bönor" buttonType="square" />
            <Button buttonText="Oumph" buttonType="square" />
            <Button buttonText="Linser" buttonType="square" />
            <Button buttonText="Lax" color="mint" buttonType="square" />
            <Button buttonText="Vit Fisk" color="mint" buttonType="square" />
            <Button buttonText="Färs" color="mint" buttonType="square" />
            <Button buttonText="Fisk" color="mint" buttonType="square" />
            <Button buttonText="Mozzarella" buttonType="square" />
            <Button buttonText="Getost" buttonType="square" />
            <Button buttonText="Fetaost" buttonType="square" />
            <Button buttonText="Ägg" buttonType="square" />
            <Button buttonText="Kyckling" color="persica" buttonType="square" />
            <Button buttonText="Vilt" color="persica" buttonType="square" />
            <Button buttonText="Nötkött" color="persica" buttonType="square" />
            <Button buttonText="Fläskött" color="persica" buttonType="square" />
          </div>
        </span>
        <div className="next-page">
          <Link href="/Landing-page">
            <a>
              <Button buttonText="Back" color="mint" />
            </a>
          </Link>
          <Link href="/Choose-second">
            <a>
              <Button buttonText="Välj Första" color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}


export default ChooseFirst;
