import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutMe } from '../../actions/authAction';

import '../../style/main.scss';
import './Logout.scss';

const Logout = () => {
  const history = useHistory();
  const out = () => {
    history.push('/');
  };
  return (
    <button className="logout" type="button" onClick={() => { logoutMe(); out(); }} href="#">
       Logga ut
    </button>
  );
};


export default connect(null, { logoutMe })(Logout);
