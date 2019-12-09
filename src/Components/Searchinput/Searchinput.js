import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';
import './Searchinput.css';


const Searchinput = ({ recipeTitle }) => (
  <div className="Searchinput">
    <div className="Searchinputtext">
      <input type="text" placeholder="Sök" />
    </div>
  </div>
);

Searchinput.propTypes = {
  recipeTitle: PropTypes.string,
};

Searchinput.defaultProps = {
  recipeTitle: 'title',
};

export default Searchinput;
