import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutMe } from '../../actions/authAction';

const Logout = () => {
  const history = useHistory();
  const out = () => {
    history.push('/');
  };
  return (
    <button type="button" onClick={() => { logoutMe(); out(); }} href="#">
       Logga ut
    </button>
  );
};


export default connect(null, { logoutMe })(Logout);
