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
  return (
    <div>
      <Page>
        <Header headLine={headLine} />
        [Sign-up]
        <Link href="/Landing-page">
          <a>Landing-page</a>
        </Link>
        <div className="select-button">
          <Button buttonText={buttonText1} />
          <Button buttonText={buttonText2} />
          <Button buttonText={buttonText3} />
        </div>
      </Page>
    </div>
  );
}
