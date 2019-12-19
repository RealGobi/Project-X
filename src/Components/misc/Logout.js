import React from 'react';
import { connect } from 'react-redux';
import { logoutMe } from '../../actions/authAction';

const Logout = () => (
  <button type="button" onClick={logoutMe} href="#">
       Logga ut
  </button>
);


export default connect(null, { logoutMe })(Logout);
