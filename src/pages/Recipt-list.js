import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function ReciptList() {
  return (
    <div>
      <Page>
        <Header headLine="Receptlista" />
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
        <Link href="/Choose-second">
          <a>
            <Button buttonText="Tillbaka" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
