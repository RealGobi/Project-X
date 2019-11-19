import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import './Button.css';

/**
 * Renders background color for button.
 *
 * @param {string} buttonText Props passed down as a string.
 * @param {object} bg Props passed down as a style object.
 * @param {Button} Button-component need to be wrapped within a <a>-tag, to work with next.js.
 * */

const Button = ({ buttonText, color }) => {
  let bg;

  switch (color) {
    case 'mint':
      bg = { background: '#B7DDE0' };
      break;
    case 'persica':
      bg = { background: '#FFC79B' };
      break;
    case 'yellow':
      bg = { background: '#FEE19F' };
      break;
    default:
  }

  return (
    <div className="Button" style={bg}>
      <h1 className="header-style"> { buttonText } </h1>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  buttonText: '',
  color: 'yellow',
};

export default Button;
