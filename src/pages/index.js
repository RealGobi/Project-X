import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function Login() {
  return (
    <div>
      <Page>
        Let´s do DINNER!
        <Link href="/Sign-up">  
          <a>
            <Button buttonText="Skapa Konto" />
          </a>
        </Link>
        <Link href="/Landing-page">
          <a>
            <Button buttonText="Logga In" />
          </a>
        </Link>
      </Page>
    </div>
  );
}
