import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function Login() {
  const bg1 = {
    background: '#B7DDE0',
  };
  const bg2 = {
    background: '#FEE19F',
  };
  const bg3 = {
    background: '#FFC79B',
  };

  return (
    <div>
      <Page>
        Let´s do DINNER!
        <Link href="/Sign-up">  
          <a>
            <Button buttonText="Skapa Konto" bg={bg2} />
          </a>
        </Link>
        <Link href="/Landing-page">
          <a>
            <Button buttonText="Logga In" bg={bg1} />
          </a>
        </Link>
      </Page>
    </div>
  );
}
