import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseFirst() {
  return (
    <div>
      <Page>
        <Header headLine="Välj Första" />

        <div className="select-button">
          <Button buttonText="Kyckling" bg="mint" />
          <Button buttonText="Tofu" />
          <Button buttonText="Oumph" />
        </div>
        <div className="next-page">
          <Link href="/Landing-page">
            <a>
              <Button buttonText="Back" />
            </a>
          </Link>
          <Link href="/Choose-second">
            <a>
              <Button buttonText="Välj Första" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
