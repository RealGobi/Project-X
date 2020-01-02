/* eslint-disable react/forbid-prop-types */
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { login } from '../actions/authAction';
import { clearErrors } from '../actions/errorAction';
import store from '../store';
import Button from '../Components/Button/Button';

function Login(props) {
  // prop types

  Login.propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
  };
  Login.defaultProps = {
    isAuthenticated: false,
  };

  // state
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [msg, setMsg] = useState('');
  const { error, isAuthenticated } = props;
  const history = useHistory();

  // submit func
  const onSubmit = (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    store.dispatch(login(user));
  };

  // login with enter key
  const enterClick = (e) => {
    if (e.key === 'Enter') {
      onSubmit(e);
    }
  };

  // check if valid token exist, and login in if valid
  useEffect(() => {
    if (error.id === 'LOGIN_FAIL') {
      setMsg(error.msg.msg);
    } else {
      setMsg(null);
    }
    if (isAuthenticated) {
      history.push('/landing-page');
    }
  }, [onSubmit]);

  return (
    <div className="Startlogga">
      <form className="login-container">
        <div className="err">
          {
                msg
                  && <div className="error">{msg}</div>
              }
        </div>
        <div className="input-container">
          <span>E-post:</span> <input type="email" id="email" tabIndex="0" onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="input-container">
          <span>Lösenord:</span> <input type="password" id="password" onChange={e => setPassword(e.target.value)} onKeyDown={enterClick} />
        </div>
        <div className="login-button-container">
          <Link to="/signup">
            <Button buttonText="Skapa Konto" color="mint" role="button" />
          </Link>
          <span>
            <Button buttonText="Logga In" color="yellow" role="button" clickHandler={onSubmit} />
          </span>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { login, clearErrors })(Login);
