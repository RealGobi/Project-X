import React from 'react';
import Link from 'next/link';
import Popup from 'reactjs-popup';

import './popup.css';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

import Mail from '../images/button-contact.svg';
import Settings from '../images/button-settings.svg';

export default function LandingPage() {
  const mail = <h1>Maila mig!</h1>;
  const setting = <h1>Inställningar!</h1>;
  return (
    <div>
      <Header headLine="God Morgon" />
      <Page>
        <div className="mail-button">
          <Popup trigger={<img src={Mail} alt="mail" />} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {mail}
                </div>
              </div>
            )}
          </Popup>
          <Popup trigger={<img src={Settings} alt="inställningar" />} modal>
            {close => (
              <div className="modal">
                <a className="close" onClick={close}>
                &times;
                </a>
                <div className="header"> Modal Title </div>
                <div className="content">
                  {setting}
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className="landing-button-position">
          <Link href="/Choose-first">
            <a>
              <Button buttonType="big" buttonText="Välj 2 och få alternativ på middag" color="yellow" />
            </a>
          </Link>
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
