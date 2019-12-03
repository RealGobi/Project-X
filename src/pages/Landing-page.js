import React from 'react';
import Link from 'next/link';

import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import Popup from '../Components/Popup/Popup';


import Mail from '../images/button-contact.svg';
import Settings from '../images/button-settings.svg';

export default function LandingPage() {
  const pop = <h1>hej</h1>;

  return (
    <div>
      <Header headLine="God Morgon" />
      <Page>
        <div className="mail-button">
          <Link href="/Choose-first">
            <a>
              <img src={Mail} alt="mail" />
            </a>
          </Link>
          <Link href="/Choose-first">
            <a>
              <img src={Settings} alt="inställningar" />
            </a>
          </Link>
        </div>
        <div className="landing-button-position">
          <Link href="/Choose-first">
            <a>
              <Button buttonType="big" buttonText="Välj 2 och få alternativ på middag" color="yellow" />
            </a>
          </Link>
          <Popup trigger={Mail}>
            {pop}
          </Popup>
          <Link href="/Search-list">
            <a>
              <Button buttonType="big" buttonText="Sök efter Recept" color="persica" />
            </a>
          </Link>
        </div>
      </Page>
    </div>
  );
}
