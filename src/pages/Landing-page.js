import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function LandingPage() {
  return (
    <div>
      <Header headLine="God Morgon" />
      <Page>
        <div className="select-button">
          <Button buttonText="maila oss" />
          <Button buttonText="inställningar" />
        </div>
        <Link href="/Choose-first" >
          <a>
            <Button buttonType="big" buttonText="Välj 2 och få alternativ på middag" color="yellow" />
          </a>
        </Link>
        <Link href="/Search-list">
          <a>
            <Button buttonType="big" buttonText="Sök efter Recept" color="persica" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
