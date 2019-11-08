import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function ChooseSecond() {
  return (
    <div>
      <Page>
        [Choose Second]
        <Link href="/Recipt-list">
          <a>Recipt-list</a>
        </Link>
      </Page>
    </div>
  );
}
