import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Components/Button/Button';


export default function Login({ submitHandler, setEmail, setPassword }) {
  Login.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    setEmail: PropTypes.func.isRequired,
    setPassword: PropTypes.func.isRequired,
  };

  return (
    <div className="Startlogga">
      <form className="login-container">
        <div className="input-container">
          <span>E-post:</span> <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <span>Lösenord:</span> <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
        </div>
        <div className="login-button-container">
          <Link to="/signup">
            <Button buttonText="Skapa Konto" color="mint" />
          </Link>
          <span onClick={() => submitHandler()}>
            <Link to="landing-page">
              <Button buttonText="Logga In" color="yellow" />
            </Link>
          </span>
        </div>
      </form>
    </div>
  );
}
