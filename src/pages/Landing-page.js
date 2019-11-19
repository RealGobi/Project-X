import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function LandingPage() {
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
        <Header headLine="God Morgon" />
        <div className="select-button">
          <Button buttonText="maila oss" bg={bg2} />
          <Button buttonText="inställningar" bg={bg2} />
        </div>
        <Link href="/Choose-first">
          <a>
            <Button buttonText="Välj 2 och få alternativ på middag" bg={bg2} />
          </a>
        </Link>
        <Link href="/Search-list">
          <a>
            <Button buttonText="Sök efter Recept" bg={bg3} />
          </a>
        </Link>
      </Page>
    </div>
  );
}
