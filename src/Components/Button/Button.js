import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';

/**
 * Renders background color for button.
 *
 * @param {string} buttonText Props passed down as a string.
 * @param {object} bg Props passed down as a style object.
 * 
 */

const Button = ({ buttonText, bg }) => (
  <div className="button" style={bg}>
    <h1 className="buttonText"> { buttonText } </h1>
  </div>
);

Button.propTypes = {
  buttonText: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  bg: PropTypes.object.isRequired,
};

Button.defaultProps = {
  buttonText: '',
};

export default Button;
