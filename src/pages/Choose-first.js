import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst() {
  return (
    <div>
      <Header headLine="Välj Första" />

      <Page> 
        <div className="choose-button">
          <Button buttonText="Tofu" buttonType="square" />
          <Button buttonText="Oumph" buttonType="square" />
          <Button buttonText="Kyckling" color="mint" buttonType="square" />
          <Button buttonText="Tofu" buttonType="square" />
          <Button buttonText="Oumph" buttonType="square" />
        </div>
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
