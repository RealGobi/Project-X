/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import './popup.css';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

import Mail from '../images/button-contact.svg';
import Settings from '../images/button-settings.svg';

export default function LandingPage() {
  const mail = <span><label> Ämne:<input type="text" /></label><label> Förslag eller synpunkt:<input type="textarea" /><Button buttonText="Skicka" color="yellow" /></label></span>;
  const setting = <span className="settings"><Button buttonText="Vegan" color="mint" /><Button buttonText="Vegetarian" color="yellow" /><Button buttonText="Fiskätare" color="mint" /><Button buttonText="Allätare" color="persica" /></span>;
  return (
    <div>
      <Header headLine="God Morgon" />
      <Page>
        <div className="mail-button">
          <Popup trigger={<img src={Mail} alt="mail" />} modal>
            {close => (
              <div className="modal">
                <span className="close" onClick={close}>
                &times;
                </span>
                <div className="header"> Kontaktformulär </div>
                <div className="content">
                  {mail}
                </div>
              </div>
            )}
          </Popup>
          <Popup trigger={<img src={Settings} alt="inställningar" />} modal>
            {close => (
              <div className="modal">
                <span className="close" onClick={close}>
                &times;
                </span>
                <div className="header">Inställningar</div>
                <div className="content">
                  {setting}
                </div>
              </div>
            )}
          </Popup>
        </div>
        <div className="landing-button-position">
          <Link to="/choose-first">
            <Button buttonType="big" buttonText="Välj 2 och få alternativ på middag" color="yellow" />
          </Link>
          <Link to="/search-list">
            <Button buttonType="big" buttonText="Sök efter Recept" color="persica" />
          </Link>
        </div>
      </Page>
    </div>
  );
}
