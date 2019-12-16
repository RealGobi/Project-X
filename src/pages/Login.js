import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Button from '../Components/Button/Button';

import useFetch from '../Hooks/useFetch';

export default function Login() {
  const passwordmail = <span><label htmlFor="email">E-post: <input type="text" /></label><span className="send"><Button buttonText="Maila lösenord" color="mint" /></span></span>;
  const userEmail = React.createRef();
  const userPassword = React.createRef();


  const userApi = useFetch(
    'http://localhost:3000/user/login',
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    const email = userEmail.current.value;
    const password = userPassword.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email, password);
    await userApi
      .post({
        email,
        password,
      })
      .then((data) => {
        const { token } = data;
        console.log(token);
      });
  };

  return (
    <div className="Startlogga">
      <form className="login-container">
        <div className="input-container">
          <span>E-post:</span> <input type="email" id="email" ref={userEmail} />
        </div>
        <div className="input-container">
          <span>Lösenord:</span> <input type="password" id="password" ref={userPassword} />
        </div>
        <div className="login-button-container">
          <Link to="/signup">
            <Button buttonText="Skapa Konto" color="mint" />
          </Link>
          <span onClick={submitHandler}>
            <Link to="landing-page">
              <Button buttonText="Logga In" color="yellow" />
            </Link>
          </span>
        </div>
      </form>
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
  );
}
