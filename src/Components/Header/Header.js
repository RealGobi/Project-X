import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import Logout from '../misc/Logout';

const Header = ({ headLine }) => (
  <div className="header">
    <h1 className="headLine"> { headLine } </h1>
    <Logout />
  </div>
);

Header.propTypes = {
  headLine: PropTypes.string,
};

Header.defaultProps = {
  headLine: '',
};

export default Header;
