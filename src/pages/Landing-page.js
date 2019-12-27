/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';

import './popup.css';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';

import Settings from '../images/button-settings.svg';
import Background from '../images/lemons.jpg';

export default function LandingPage(props) {
  const userName1 = props.userName;
  const foodtypeUser1 = props.food;
  const [foodType, setUserFoodType] = useState(foodtypeUser1);

  const hello = <span>God Morgon {userName1}</span>;
  const styleback = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };
  const setting = (
    <span className="settings">
      <Button buttonText="Vegan" color="mint" clickHandler={() => setUserFoodType('Vegan')} />
      <Button buttonText="Lakto-ovo Vegetarian" color="yellow" clickHandler={() => setUserFoodType('Vegetarian')} />
      <Button buttonText="Vegetarian + Fisk" color="mint" clickHandler={() => setUserFoodType('Fiskätare')} />
      <Button buttonText="Allätare" color="persica" clickHandler={() => setUserFoodType('Allätare')} />
      <p>Vald: {foodType}</p>
    </span>
  );
 
  return (
    <div id="bg" style={styleback}>
      <Header headLine={hello} />
      <Page>
        <div className="mail-button">
          <Link to="/admin">
            <Button buttonText="Lägg till recept" color="mint" />
          </Link>
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
