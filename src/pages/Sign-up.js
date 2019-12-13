import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Page from '../Components/Page/Page';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import Background from '../images/monika-grabkowska-white.jpg';
import useFetch from '../Hooks/useFetch';

export default function SignUp() {
  const headLine = 'Skapa Konto';
  const styleback = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  const userName = React.createRef();
  const userEmail = React.createRef();
  const userPassword = React.createRef();
  const [foodType, setUserFoodType] = useState('');

  const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlczB0QHRlc3Quc2UiLCJ1c2VySWQiOiI1ZGU3YWZhODU2MjA1YzBkMjFhZDg2YjQiLCJpYXQiOjE1NzYyNDg4NjEsImV4cCI6MTU3NjI1MjQ2MX0.qni65blh09WKpSPcNohF0a6mUE4aEf2HT2sKyk2o_mI';
  const userApi = useFetch(
    'http://localhost:3000/users/',
    token,
  );

  const submitHandler = (event) => {
    event.preventDefault();
    const name = userName.current.value;
    const email = userEmail.current.value;
    const password = userPassword.current.value;

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }
    console.log(email, password, name, foodType);
  /*   userApi
      .post({
        name,
        email,
        password,
        foodType,
      })
      .then((data) => {
        console.log(data);
      }); */
  };

  return (
    <div>
      <Header headLine={headLine} />
      <div id="bg" style={styleback}>
        <Page>
          <form className="sign-up" onSubmit={submitHandler}>
            <div className="input-container">
              <span>Namn:</span> <input type="text" id="name" ref={userName} />
            </div>
            <div className="input-container">
              <span>E-post:</span> <input type="email" id="email" ref={userEmail} />
            </div>
            <div className="input-container">
              <span>Lösenord:</span> <input type="password" id="password" ref={userPassword} />
            </div>
            <div className="select-preference-button">
              <Button buttonText="Vegan" color="mint" clickHandler={() => setUserFoodType('Vegan')} />
              <Button buttonText="Vegetarian" color="yellow" clickHandler={() => setUserFoodType('Vegetarian')} />
              <Button buttonText="Fiskätare" color="mint" clickHandler={() => setUserFoodType('Fiskätare')} />
              <Button buttonText="Allätare" color="persica" clickHandler={() => setUserFoodType('Allätare')} />
            </div>
            <div className="next-page">
              <button type="submit">Skapa Konto</button>
              <Link to="/">
                <Button buttonText="Tillbaka" color="mint" />
              </Link>
            </div>
          </form>
        </Page>
      </div>
    </div>
  );
}
