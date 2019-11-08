import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function SearchList() {
  return (
    <div>
      <Page>
        [Search-list]
        <Link href="/Recipt-page">
          <a>Recipt-page</a>
        </Link>
      </Page>
    </div>
  );
}
