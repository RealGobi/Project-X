import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseSecond() {
  return (
    <div>
      <Page>
        <Header headLine="Välj Andra" />
        <div className="select-button">
          <Button buttonText="Ris" />
          <Button buttonText="Pasta" />
          <Button buttonText="Potatis" />
        </div>
        <div className="next-page">
          <Link href="/Choose-second">
            <a>
              <Button buttonText="Back" />
            </a>
          </Link>
          <Link href="/Recipt-list">
            <a>
              <Button buttonText="Välj Andra" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
