import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Page from '../Components/Page/Page';
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
  SignUp.defaultProps = {
    isAuthenticated: false,
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

  useEffect(() => {
    if (error.id === 'REGISTER_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    if (isAuthenticated) {
      props.history.push('/landing-page');
    }
  }, [onSubmit]);

  return (
    <div>
      <Header headLine={headLine} />
      <div id="bg" style={styleback}>
        <Page>
          <form className="sign-up">
            <div className="input-container">
              <label htmlFor="name">Name:<input type="text" id="name" onChange={e => setName(e.target.value)} /> </label>
            </div>
            <div className="input-container">
              <label htmlFor="email">E-post: <input type="email" id="email" onChange={e => setEmail(e.target.value)} /></label>
            </div>
            <div className="input-container">
              <label htmlFor="password">Lösenord: <input type="password" id="password" onChange={e => setPassword(e.target.value)} /></label>
            </div>
            <div className="select-preference-button">
              <div className="item1">
                {
                msg
                  && <span className="error">{msg}</span>
              }
              </div>
              <Button className="item2" buttonText="Vegan" color="persica" clickHandler={() => setUserFoodType(1)} />
              <Button className="item3" buttonText="Lakto-ovo Vegetarian" color="yellow" clickHandler={() => setUserFoodType(2)} />
              <Button className="item4" buttonText="Vegetarian + Fisk" color="mint" clickHandler={() => setUserFoodType(3)} />
              <Button className="item5" buttonText="Allätare" color="persica" clickHandler={() => setUserFoodType(4)} />
              <Link to="/landing-page">
                <Button className="item6" buttonText="Skapa Konto" color="mint" clickHandler={onSubmit} />
              </Link>
              <Link to="/">
                <Button className="item7" buttonText="Tillbaka" color="mint" />
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
