import React from 'react';
import PropTypes from 'prop-types';

import '../../style/main.scss';

const Drawerlist = ({ headLine }) => (
  <div className="drawerlist">
    <h1 className="headLine"> { headLine } + </h1>
  </div>
);

Drawerlist.propTypes = {
  headLine: PropTypes.string,
};

Drawerlist.defaultProps = {
  headLine: '',
};

export default Drawerlist;
