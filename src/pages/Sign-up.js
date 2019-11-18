import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function SignUp() {
  const headLine = 'Skapa Konto';

  const buttonText1 = 'Vego';
  const buttonText2 = 'Vegitarian';
  const buttonText3 = 'Allätare';

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
        <Header headLine={headLine} />
        [Sign-up]
        <Link href="/Landing-page">
          <a>Landing-page</a>
        </Link>
        <div className="select-button">
          <Button buttonText={buttonText1} bg={bg1} />
          <Button buttonText={buttonText2} bg={bg2} />
          <Button buttonText={buttonText3} bg={bg3} />
        </div>
      </Page>
    </div>
  );
}
