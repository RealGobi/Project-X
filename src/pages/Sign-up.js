import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
import usePrev from '../Hooks/usePrev';
import Header from '../Components/Header/Header';
import Button from '../Components/Button/Button';
import Background from '../images/monika-grabkowska-white.jpg';
import { signUp } from '../actions/authAction';
import { clearErrors } from '../actions/errorAction';
import store from '../store';


function SignUp(props) {
  // prop types

  SignUp.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    signUp: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired,
  };

  const headLine = 'Skapa Konto';
  const styleback = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  };

  // state

  const [foodType, setUserFoodType] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    // Create user object
    const newUser = {
      name,
      email,
      password,
      foodType,

    };

    // Attempt to register
    store.dispatch(signUp(newUser));
  };

  const { error, isAuthenticated } = props;
  console.log(error);

  useEffect(() => {
    if (error) {
      setMsg({ msg: error.msg.msg });
    } else {
      setMsg({ msg: null });
    }
  }, []);
  return (
    <div>
      <Header headLine={headLine} />
      <div id="bg" style={styleback}>
        <Page>
          <form className="sign-up" onSubmit={onSubmit}>
            <div className="input-container">
              <label htmlFor="name">Name: </label><input type="text" id="name" onChange={e => setName(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="email">E-post: </label> <input type="email" id="email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className="input-container">
              <label htmlFor="password">Lösenord: </label> <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
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

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { signUp, clearErrors })(SignUp);
