import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';

/**
 * Renders background color for button.
 *
 * @param {string} buttonText Props passed down as a string.
 * @param {object} bg Props passed down as a style object.
 * @param {Button} Button-component need to be wrapped within a <a>-tag, to work with next.js.
 * */

const Button = ({ buttonText, bg }) => {
  const buttonTextStyle = {
    fontFamily: 'Red Hat Text',
    fontSize: '1.2rem',
    color: '#4f4f4f',
  };

  return (
    <div className="button" style={bg}>
      <h1 style={buttonTextStyle}> { buttonText } </h1>
    </div>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  bg: PropTypes.object,
};

Button.defaultProps = {
  buttonText: '',
  bg: { background: '#FFC79B' },
};

export default Button;
