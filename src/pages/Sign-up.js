/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function SignUp() {
  const headLine = 'Skapa Konto';

  const buttonText1 = 'Vegan';
  const buttonText2 = 'Vegetarian';
  const buttonText3 = 'Allätare';
  const buttonText4 = 'Skapa Konto';

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
        <div className="select-button">
          <Button buttonText={buttonText1} color="mint" />
          <Button buttonText={buttonText2} color="yellow" />
          <Button buttonText={buttonText3} color="persica" />
        </div>
        <div className="next-page">
          <Link href="/Landing-page">
            <a>
              <Button buttonText={buttonText4} color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
