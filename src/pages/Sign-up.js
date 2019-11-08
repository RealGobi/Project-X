import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';

export default function SignUp() {
  return (
    <div>
      <Page>
        [Sign-up]
        <Link href="/Landing-page">
          <a>Landing-page</a>
        </Link>
      </Page>
    </div>
  );
}
