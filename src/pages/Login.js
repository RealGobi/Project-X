import React from 'react';
import { Link } from 'react-router-dom';
import Popup from 'reactjs-popup';
import Button from '../Components/Button/Button';

import useFetch from '../Hooks/useFetch';

export default function Login() {
  const passwordmail = <span><label htmlFor="email">E-post: <input type="text" /></label><span className="send"><Button buttonText="Maila lösenord" color="mint" /></span></span>;
  const userEmail = React.createRef();
  const userPassword = React.createRef();

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlczB0QHRlc3Quc2UiLCJ1c2VySWQiOiI1ZGU3YWZhODU2MjA1YzBkMjFhZDg2YjQiLCJpYXQiOjE1NzYyNDg4NjEsImV4cCI6MTU3NjI1MjQ2MX0.qni65blh09WKpSPcNohF0a6mUE4aEf2HT2sKyk2o_mI';
  const userApi = useFetch(
    'http://localhost:3000/users/',
    token,
  );

  const submitHandler = (event) => {
    event.preventDefault();
    const email = userEmail.current.value;
    const password = userPassword.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email, password);
    userApi
      .get({
        email,
        password,
      })
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="Startlogga">
      <form className="login-container" onSubmit={submitHandler}>
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
          <button type="submit">Logga in</button>
          <Link to="landing-page">
            <Button buttonText="Logga In" color="yellow" />
          </Link>
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
