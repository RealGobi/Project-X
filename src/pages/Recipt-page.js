import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function ReciptPage() {
  return (
    <div>
      <Page>
        [Result-Page]
        <Link href="/Recipt-list">
          <a>back</a>
        </Link>
      </Page>
    </div>
  );
}
