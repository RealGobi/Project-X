import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';

export default function SignUp() {
  const headLine = 'Skapa Konto';
  return (
    <div>
      <Page>
        <Header headLine={headLine} />
        [Sign-up]
        <Link href="/Landing-page">
          <a>Landing-page</a>
        </Link>
      </Page>
    </div>
  );
}
