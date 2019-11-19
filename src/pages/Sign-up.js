/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

export default function SignUp() {
  const headLine = 'Skapa Konto';

  return (
    <div>
      <Page>
        <Header headLine={headLine} />
        [Sign-up]
        <div className="select-button">
          <Button buttonText="Vegan" color="mint" />
          <Button buttonText="Vegetarian" color="yellow" />
          <Button buttonText="Allätare" color="persica" />
        </div>
        <div className="next-page">
          <Link href="/Landing-page">
            <a>
              <Button buttonText={headLine} color="mint" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
