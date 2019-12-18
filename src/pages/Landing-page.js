/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import './popup.css';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

import Mail from '../images/button-contact.svg';
import Settings from '../images/button-settings.svg';

export default function LandingPage(props) {
  const userName1 = props.userName;
  const foodtypeUser1 = props.food;
  const [foodType, setUserFoodType] = useState(foodtypeUser1);

  const hello = <span>God Morgon {userName1}</span>;
  const setting = (
    <span className="settings">
      <Button buttonText="Vegan" color="mint" clickHandler={() => setUserFoodType('Vegan')} /><Button buttonText="Vegetarian" color="yellow" clickHandler={() => setUserFoodType('Vegetarian')} />
      <Button buttonText="Fiskätare" color="mint" clickHandler={() => setUserFoodType('Fiskätare')} />
      <Button buttonText="Allätare" color="persica" clickHandler={() => setUserFoodType('Allätare')} />
      <p>Du har valt {foodType}. Tryck på krysset om du är nöjd.</p>
    </span>
  );
  const mail = <span><label htmlFor="ämne"> Ämne:<input type="text" /></label><label> Förslag eller synpunkt:<input type="textarea" /><Button buttonText="Skicka" color="yellow" /></label></span>;
  console.log(foodType);

  return (
    <div>
      <Header headLine={hello} />

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
