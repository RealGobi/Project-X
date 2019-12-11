import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Button from '../Components/Button/Button';

export default function Login() { 
  const passwordmail = <h3>Maila mig nytt lösenord!</h3>;

  return (
    <div className="Startlogga">
      <div className="login-container">
        <div className="input-container">
          <span>E-post:</span> <input type="email" />
        </div>
        <div className="input-container">
          <span>Lösenord:</span> <input type="password" />
        </div>
        <div className="login-button-container">
          <Link to="/signup">
            <Button buttonText="Skapa Konto" color="mint" />
          </Link>
          <Link to="landing-page">
            <Button buttonText="Logga In" color="yellow" />
          </Link>
        </div>
        <div> 
          <Popup trigger={<p>glömt lösenord</p>} modal>
            {close => (
              <div className="modal">
                <span className="close" onClick={close}>
                &times;
                </span>
                <div className="header"> Nytt lösenord</div>
                <div className="content">
                  {passwordmail}
                </div>
              </div>
            )}
          </Popup>
        </div>
      </div>
    </div>
  );
}
