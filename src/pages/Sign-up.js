import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

import Background from '../images/monika-grabkowska-white.jpg';

export default function SignUp() {
  const headLine = 'Skapa Konto';
  const styleback = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div>
      <Header headLine={headLine} />
      <div id="bg" style={styleback}>
        <Page>
          <div className="sign-up">
            <div className="input-container">
              <span>Namn:</span> <input type="text" />
            </div>
            <div className="input-container">
              <span>E-post:</span> <input type="email" />
            </div>
            <div className="input-container">
              <span>Lösenord:</span> <input type="password" />
            </div>
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
          </div>
        </Page>
      </div>
    </div>
  );
}
