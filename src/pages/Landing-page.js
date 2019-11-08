import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function LandingPage() {
  return (
    <div>
      <Page>
        [Landing-page]
        <Link href="/Choose-first">
          <button>Choose-first</button>
        </Link>
        <Link href="/Search-list">
          <button>Search-list</button>
        </Link>
      </Page>
    </div>
  );
}
