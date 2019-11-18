import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';

const Header = ({ headLine }) => (
  <div className="header">
    <h1 className="headLine"> { headLine } </h1>
  </div>
);

Header.propTypes = {
  headLine: PropTypes.node,
};

Header.defaultProps = {
  headLine: '',
};

export default Header;
