import React from 'react';
import PropTypes from 'prop-types';
import useWindowDimensions from '../../Hooks/useWindowDimensions';
import '../../style/main.scss';
import './Button.css';

/**
 * Renders background color for button.
 *
 * @param {string} buttonText Props passed down as a string.
 * @param {string} color Props passed down as a string:'mint','persica', 'yellow'.
 * @param {string} buttonType Props passed down as a string:'square','normal', 'big'.
 * @param {func} clickHandler Func to handle click.
 * */

const Button = ({
  buttonText, color, buttonType, clickHandler,
}) => {
  let bg;
  let btnType;
  const { width } = useWindowDimensions();

  switch (color) {
    case 'mint':
      bg = { background: '#B7DDE0' };
      break;
    case 'persica':
      bg = { background: '#FFC79B' };
      break;
    default:
      bg = { background: '#FEE19F' };
      break;
  }

  if (width > 767) {
    switch (buttonType) {
      case 'big':
        btnType = { width: '500px', height: '75px' };
        break;
      case 'square':
        btnType = { width: '125px', height: '125px' };
        break;
      case 'small':
        btnType = { width: '125px', height: '50px' };
        break;
      default:
        btnType = { width: '200px', height: '75px' };
        break;
    }
  } else {
    switch (buttonType) {
      case 'big':
        btnType = { width: '330px', height: '55px' };
        break;
      case 'square':
        btnType = { width: '75px', height: '75px' };
        break;
      case 'small':
        btnType = { width: '85px', height: '40px' };
        break;
      default:
        btnType = { width: '140px', height: '55px' };
        break;
    }
  }
  return (
    <div onClick={clickHandler} className="Button" style={{ ...bg, ...btnType }}>
      <h1 className="button-text"> {buttonText} </h1>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  color: PropTypes.string,
  buttonType: PropTypes.string,
  clickHandler: PropTypes.func,
};

Button.defaultProps = {
  buttonText: '',
  color: 'yellow',
  buttonType: 'normal',
  clickHandler: null,
};

export default Button;
