import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';


const buttonStyle = {
  width: '180px',
  height: '65px',
  borderRadius: '4px',
  margin: '24px',
};

const Button = ({ buttonText, bg }) => (
  <div style={buttonStyle}>
    <h1 className="buttonText"> { buttonText } </h1>
  </div>
);

Button.propTypes = {
  buttonText: PropTypes.string,
  bg: PropTypes.string,
};

Button.defaultProps = {
  buttonText: '',
  bg: '#eee',
};

export default Button;
