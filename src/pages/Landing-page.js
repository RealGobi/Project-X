import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function LandingPage() {
  return (
    <div>
      <Page>
        <Header headLine="God Morgon" />
        <div className="select-button">
          <Button buttonText="maila oss" />
          <Button buttonText="inställningar" />
        </div>
        <Link href="/Choose-first">
          <a>
            <Button buttonText="Välj 2 och få alternativ på middag" />
          </a>
        </Link>
        <Link href="/Search-list">
          <a>
            <Button buttonText="Sök efter Recept" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
