import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import './Button.css';

/**
 * Renders background color for button.
 *
 * @param {string} buttonText Props passed down as a string.
 * @param {string} color Props passed down as a string:'mint','persica', 'yellow'.
 * @param {string} buttonType Props passed down as a string:'square','normal', 'big'.
 * @param {Button} Button-component need to be wrapped within a <a>-tag, to work with next.js.
 * */

const Button = ({ buttonText, color, buttonType }) => {
  let bg;
  let btnType;

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

  switch (buttonType) {
    case 'big':
      btnType = { width: '400px' };
      break;
    case 'normal':
      btnType = { width: '180px' };
      break;
    case 'square':
      btnType = { width: '100px', heigth: '100px' };
      break;
    default:
  }

  return (
    <div className="Button" style={{ ...bg, ...btnType }}>
      <h1 className="button-text"> { buttonText } </h1>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  buttonType: PropTypes.string,
};

Button.defaultProps = {
  buttonText: '',
  color: 'yellow',
  buttonType: 'normal',
};

export default Button;
