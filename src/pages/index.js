import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Button from '../Components/Button/Button';

export default function Login() {
  return (
    <div>
      <Page>
        Let´s do DINNER!
        <Link href="/Sign-up">  
          <a>
            <Button buttonText="Skapa Konto" color="mint" />
          </a>
        </Link>
        <Link href="/Landing-page">
          <a>
            <Button buttonText="Logga In" color="yellow" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
