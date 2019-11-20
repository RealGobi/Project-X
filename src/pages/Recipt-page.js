import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';
import Header from '../Components/Header/Header';

export default function ReciptPage() {
  return (
    <div>
      <Page>
        <Header headLine="Recept" />
        <Link href="/Recipt-list">
          <a>
            <Button buttonText="Tillbaka" color="mint" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
