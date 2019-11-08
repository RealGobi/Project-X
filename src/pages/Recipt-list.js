import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function ReciptList() {
  return (
    <div>
      <Page>
        [Recipt List]
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
      </Page>
    </div>
  );
}
