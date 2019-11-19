import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ChooseSecond() {
  const bg1 = {
    background: '#B7DDE0',
  };
  const bg2 = {
    background: '#FEE19F',
  };
  const bg3 = {
    background: '#FFC79B',
  };

  return (
    <div>
      <Page>
        <Header headLine="Välj Andra" />
        <div className="select-button">
          <Button buttonText="Ris" bg={bg1} />
          <Button buttonText="Pasta" bg={bg2} />
          <Button buttonText="Potatis" bg={bg3} />
        </div>
        <div className="next-page">
          <Link href="/Choose-second">
            <a>
              <Button buttonText="Back" bg={bg1} />
            </a>
          </Link>
          <Link href="/Recipt-list">
            <a>
              <Button buttonText="Välj Andra" bg={bg1} />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
