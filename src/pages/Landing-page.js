/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { Link } from 'react-router-dom';
import './popup.css';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import Settings from '../images/button-settings.svg';
import Background from '../images/lemons.jpg';
import { changeUserSettings } from '../actions/authAction';
import store from '../store';


const LandingPage = () => {
  LandingPage.propTypes = {
    changeUserSettings: PropTypes.func.isRequired,
  };

  const userName1 = localStorage.getItem('name');
  const foodtypeUser1 = localStorage.getItem('foodType');
  const [foodType, setUserFoodType] = useState(foodtypeUser1);

  // greetingMsg

  const day = new Date();
  const hr = day.getHours();
  let headline = '';
  if (hr >= 0 && hr < 6) {
    headline = 'Nattamat?, ';
  }
  if (hr >= 6 && hr < 12) {
    headline = 'God morgon, ';
  }
  if (hr >= 12 && hr < 18) {
    headline = 'God middag, ';
  }
  if (hr >= 18 && hr < 24) {
    headline = 'God kväll, ';
  }
  const greetingMsg = <span>{headline} {userName1}</span>;

  // style
  const styleback = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const type = {
      foodType,
    };
    console.log(type);
    store.dispatch(changeUserSettings(type));
  };

  // config settings
  const setting = (
    <span className="settings">
      <Button buttonText="Vegan" buttonType="small" color="persica" clickHandler={() => setUserFoodType(1)} />
      <Button buttonText="Vegetarian" buttonType="small" color="yellow" clickHandler={() => setUserFoodType(2)} />
      <Button buttonText="Fisk" buttonType="small" color="mint" clickHandler={() => setUserFoodType(3)} />
      <Button buttonText="Allätare" buttonType="small" color="persica" clickHandler={() => setUserFoodType(4)} />
    </span>
  );

  return (
    <div id="bg" style={styleback}>
      <Header headLine={greetingMsg} />
      <Page>
        <div className="add-button">
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
                  <hr />
                  <div onClick={close}>
                    <Button buttonText="Byt preference" color="yellow" clickHandler={onSubmit} />
                  </div>
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
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { changeUserSettings })(LandingPage);
